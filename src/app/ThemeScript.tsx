export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);var l=localStorage.getItem('lang')||'cs';document.documentElement.lang=l;}catch(e){}})();`,
      }}
    />
  )
}
