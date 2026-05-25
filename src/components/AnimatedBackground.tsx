'use client'

import { useEffect, useRef } from 'react'

const LABELS = [
  'kubectl', 'terraform', 'jamf', 'docker', 'helm', 'ansible',
  'k8s', 'MDM', 'CI/CD', 'nginx', 'bash', '.tf', 'aws', 'node',
]

interface Node {
  x: number; y: number; vx: number; vy: number
  r: number; label?: string; hub: boolean
  pulse: number; pulseMax: number
}

export default function AnimatedBackground() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number, W = 0, H = 0, lastT = 0
    const nodes: Node[] = []

    function spawn() {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
      nodes.length = 0
      const count = Math.min(Math.floor((W * H) / 18000), 55)

      // 4 anchor hub nodes (corners/edges) — don't move
      const hubs = [
        { x: W * 0.15, y: H * 0.2 },
        { x: W * 0.82, y: H * 0.15 },
        { x: W * 0.72, y: H * 0.78 },
        { x: W * 0.22, y: H * 0.82 },
      ]
      hubs.forEach((h, i) => nodes.push({
        x: h.x, y: h.y, vx: 0, vy: 0,
        r: 2.8,
        label: LABELS[i],
        hub: true,
        pulse: Math.random() * 120, pulseMax: 120 + Math.random() * 80,
      }))

      // Regular satellite nodes
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.4 + 0.5,
          label: Math.random() > 0.72 ? LABELS[Math.floor(Math.random() * LABELS.length)] : undefined,
          hub: false,
          pulse: 0, pulseMax: 200,
        })
      }
    }

    function draw(t: number) {
      raf = requestAnimationFrame(draw)
      if (t - lastT < 38) return
      lastT = t

      const dark = document.documentElement.getAttribute('data-theme') === 'dark'
      const [r, g, b] = dark ? [167, 139, 250] : [100, 30, 200]

      // Background
      ctx!.fillStyle = dark ? '#07070f' : '#f5f4fe'
      ctx!.fillRect(0, 0, W, H)

      // Ambient blobs — asymmetric, not centered
      const blob1 = ctx!.createRadialGradient(W * 0.08, H * 0.1, 0, W * 0.08, H * 0.1, W * 0.42)
      blob1.addColorStop(0, `rgba(${r},${g},${b},${dark ? 0.06 : 0.035})`)
      blob1.addColorStop(1, 'transparent')
      ctx!.fillStyle = blob1; ctx!.fillRect(0, 0, W, H)

      const blob2 = ctx!.createRadialGradient(W * 0.88, H * 0.9, 0, W * 0.88, H * 0.9, W * 0.38)
      blob2.addColorStop(0, `rgba(168,85,247,${dark ? 0.05 : 0.025})`)
      blob2.addColorStop(1, 'transparent')
      ctx!.fillStyle = blob2; ctx!.fillRect(0, 0, W, H)

      // A third subtle blob center-right
      const blob3 = ctx!.createRadialGradient(W * 0.65, H * 0.45, 0, W * 0.65, H * 0.45, W * 0.28)
      blob3.addColorStop(0, `rgba(${r},${g},${b},${dark ? 0.025 : 0.012})`)
      blob3.addColorStop(1, 'transparent')
      ctx!.fillStyle = blob3; ctx!.fillRect(0, 0, W, H)

      // Connections
      const MAX = 175
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX) {
            const t = 1 - d / MAX
            const isHubConn = nodes[i].hub || nodes[j].hub
            const alpha = t * (dark ? (isHubConn ? 0.22 : 0.11) : (isHubConn ? 0.14 : 0.07))
            ctx!.strokeStyle = `rgba(${r},${g},${b},${alpha})`
            ctx!.lineWidth = isHubConn ? 0.8 : 0.45
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.stroke()
          }
        }
      }

      // Nodes + labels
      ctx!.font = '7.5px ui-monospace, monospace'
      nodes.forEach(n => {
        n.pulse++
        if (n.pulse > n.pulseMax) n.pulse = 0

        // Glow for hub nodes
        if (n.hub) {
          const pulseAlpha = Math.sin((n.pulse / n.pulseMax) * Math.PI) * (dark ? 0.18 : 0.1)
          const gradR = n.r * 6 + Math.sin((n.pulse / n.pulseMax) * Math.PI) * 4
          const grd = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, gradR)
          grd.addColorStop(0, `rgba(${r},${g},${b},${pulseAlpha})`)
          grd.addColorStop(1, 'transparent')
          ctx!.fillStyle = grd
          ctx!.beginPath()
          ctx!.arc(n.x, n.y, gradR, 0, Math.PI * 2)
          ctx!.fill()
        }

        // Node dot
        ctx!.fillStyle = `rgba(${r},${g},${b},${n.hub ? (dark ? 0.7 : 0.5) : (dark ? 0.38 : 0.22)})`
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fill()

        // Label
        if (n.label) {
          ctx!.fillStyle = `rgba(${r},${g},${b},${dark ? 0.2 : 0.12})`
          ctx!.fillText(n.label, n.x + n.r + 5, n.y + 3)
        }

        if (!n.hub) {
          n.x += n.vx; n.y += n.vy
          if (n.x < -20) n.x = W + 20
          else if (n.x > W + 20) n.x = -20
          if (n.y < -20) n.y = H + 20
          else if (n.y > H + 20) n.y = -20
        }
      })
    }

    spawn()
    raf = requestAnimationFrame(draw)
    const onResize = () => spawn()
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
