/**
 * Vercel ignored build step (`ignoreCommand` in vercel.json).
 * Exit 0 skips the build. Exit 1 continues it.
 * https://vercel.com/docs/project-configuration/vercel-json#ignorecommand
 *
 * Same approach as martinp0/svj-monitor, martinp0/tokeny-monitor,
 * martinp0/wishlist, martinp0/balkonybezholubu and martinp0/majacoin.
 *
 * Always builds production and `main`.
 * Skips preview branches under `cursor/` and `dependabot/`.
 * Skips a preview whose diff touches only non-app paths:
 *   docs/ and *.md
 * App paths build when changed:
 *   src/, public/, package files, next.config.*,
 *   postcss.config.*, vercel.json
 * Preview commits whose message contains [skip ci], [ci skip],
 * [skip vercel], or [vercel skip] are skipped.
 *
 * Never skips production, or when the changed-file list cannot be
 * determined (except the cursor/* and dependabot/* preview rule).
 */
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const SKIP_TOKEN_RE = /\[skip ci\]|\[ci skip\]|\[skip vercel\]|\[vercel skip\]/i;

const APP_PREFIXES = ["src/", "public/"];

const IGNORE_PREFIXES = ["docs/"];

const IGNORE_FILES = new Set();

const PACKAGE_FILES = new Set([
  "package.json",
  "package-lock.json",
  "npm-shrinkwrap.json",
  "pnpm-lock.yaml",
  "yarn.lock",
  "bun.lock",
  "bun.lockb",
]);

const APP_FILES = new Set(["vercel.json"]);

const APP_FILE_RE = [/^next\.config\./, /^postcss\.config\./];

export function hasSkipToken(message) {
  return SKIP_TOKEN_RE.test(message ?? "");
}

function normalize(file) {
  return String(file ?? "")
    .replaceAll("\\", "/")
    .replace(/^\.\//, "");
}

export function normalizeBranch(ref) {
  return String(ref ?? "")
    .trim()
    .replace(/^refs\/heads\//, "");
}

/** Paths that never affect the deployed web app. */
export function isIgnorable(file) {
  const f = normalize(file);
  if (!f) return false;
  if (isAppPath(f)) return false;
  if (f === "docs" || IGNORE_PREFIXES.some((prefix) => f === prefix.slice(0, -1) || f.startsWith(prefix))) {
    return true;
  }
  if (IGNORE_FILES.has(f)) return true;
  return /\.md$/i.test(f);
}

/** Paths that must build when they change. */
export function isAppPath(file) {
  const f = normalize(file);
  if (!f) return false;
  if (APP_PREFIXES.some((prefix) => f === prefix.slice(0, -1) || f.startsWith(prefix))) return true;
  const base = f.split("/").pop() ?? "";
  if (PACKAGE_FILES.has(f) || PACKAGE_FILES.has(base)) return true;
  if (APP_FILES.has(f) || APP_FILES.has(base)) return true;
  if (APP_FILE_RE.some((re) => re.test(f) || re.test(base))) return true;
  return false;
}

/**
 * @param {{ env: string, ref: string, message: string, files: string[] | null }} input
 * @returns {{ skip: boolean, reason: string }}
 */
export function decide({ env, ref, message, files }) {
  const branch = normalizeBranch(ref);
  const environment = env ?? "";

  if (environment === "production") {
    return {
      skip: false,
      reason:
        branch === "main" || branch === ""
          ? "Building production on main"
          : `Building production (${branch})`,
    };
  }

  if (branch === "main") {
    return { skip: false, reason: "Building main" };
  }

  if (branch.startsWith("cursor/") || branch.startsWith("dependabot/")) {
    const kind = branch.startsWith("cursor/") ? "cursor" : "dependabot";
    return {
      skip: true,
      reason: `Skipping Vercel preview for ${kind} branch: ${branch}`,
    };
  }

  if (Array.isArray(files) && files.length > 0 && files.every(isIgnorable)) {
    return {
      skip: true,
      reason: `Skipping Vercel build: only non-app files changed (${files.join(", ")})`,
    };
  }

  if (hasSkipToken(message)) {
    return {
      skip: true,
      reason: "Skipping preview build: commit message contains a skip token",
    };
  }

  return {
    skip: false,
    reason: `Vercel build will run for ${branch || "(no branch)"} (${environment || "unknown env"})`,
  };
}

function isUsableSha(value) {
  return typeof value === "string" && /^[0-9a-f]{7,40}$/i.test(value) && !/^0+$/.test(value);
}

function diffNames(fromRev, toRev) {
  const out = execFileSync("git", ["diff", "--name-only", fromRev, toRev], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();
  return out === "" ? [] : out.split("\n");
}

export function listChangedFiles() {
  const sha = (process.env.VERCEL_GIT_COMMIT_SHA ?? "").trim();
  const prev = (process.env.VERCEL_GIT_PREVIOUS_SHA ?? "").trim();
  const attempts = [];
  if (isUsableSha(prev) && isUsableSha(sha) && prev !== sha) {
    attempts.push([prev, sha]);
  }
  attempts.push(["HEAD^", "HEAD"]);

  for (const [fromRev, toRev] of attempts) {
    try {
      return diffNames(fromRev, toRev);
    } catch {
      // Shallow clones may not contain the previous commit. Fail open.
    }
  }
  return null;
}

function isMainModule() {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return import.meta.url === pathToFileURL(resolve(entry)).href;
  } catch {
    return true;
  }
}

function main() {
  const result = decide({
    env: process.env.VERCEL_ENV ?? "",
    ref: process.env.VERCEL_GIT_COMMIT_REF ?? "",
    message: process.env.VERCEL_GIT_COMMIT_MESSAGE ?? "",
    files: listChangedFiles(),
  });
  console.log(result.reason);
  process.exit(result.skip ? 0 : 1);
}

if (isMainModule()) {
  main();
}
