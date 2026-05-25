'use client'

import { useEffect, useRef } from 'react'

const LABELS = [
  'kubectl', 'docker run', 'terraform', 'jamf enroll',
  'git push', 'CI/CD', 'k8s', 'MDM', 'aws s3', 'helm',
  'nginx', 'bash', 'node', 'ansible', '.tf', 'linux',
]

interface Node {
  x: number; y: number
  vx: number; vy: number
  r: number; label?: string
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let W = 0, H = 0
    let lastT = 0
    const nodes: Node[] = []

    function resize() {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
      nodes.length = 0
      const count = Math.min(Math.floor((W * H) / 22000), 50)
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.8 + 0.6,
          label: Math.random() > 0.62 ? LABELS[Math.floor(Math.random() * LABELS.length)] : undefined,
        })
      }
    }

    function draw(t: number) {
      raf = requestAnimationFrame(draw)
      if (t - lastT < 34) return   // ~30 fps cap
      lastT = t

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      const [r, g, b] = isDark ? [167, 139, 250] : [109, 40, 217]

      // Background fill
      ctx!.fillStyle = isDark ? 'rgba(8,8,15,0.97)' : 'rgba(248,247,255,0.97)'
      ctx!.fillRect(0, 0, W, H)

      // Ambient gradient blobs
      const grad1 = ctx!.createRadialGradient(W * 0.1, H * 0.05, 0, W * 0.1, H * 0.05, W * 0.45)
      grad1.addColorStop(0, `rgba(${r},${g},${b},${isDark ? 0.07 : 0.04})`)
      grad1.addColorStop(1, 'transparent')
      ctx!.fillStyle = grad1
      ctx!.fillRect(0, 0, W, H)

      const grad2 = ctx!.createRadialGradient(W * 0.9, H * 0.95, 0, W * 0.9, H * 0.95, W * 0.4)
      grad2.addColorStop(0, `rgba(168,85,247,${isDark ? 0.06 : 0.03})`)
      grad2.addColorStop(1, 'transparent')
      ctx!.fillStyle = grad2
      ctx!.fillRect(0, 0, W, H)

      // Connection lines
      const MAX_DIST = 160
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < MAX_DIST * MAX_DIST) {
            const alpha = (1 - Math.sqrt(d2) / MAX_DIST) * (isDark ? 0.2 : 0.12)
            ctx!.strokeStyle = `rgba(${r},${g},${b},${alpha})`
            ctx!.lineWidth = 0.6
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.stroke()
          }
        }
      }

      // Nodes + labels
      ctx!.font = '8px "SF Mono", ui-monospace, monospace'
      nodes.forEach(n => {
        ctx!.fillStyle = `rgba(${r},${g},${b},${isDark ? 0.45 : 0.28})`
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fill()

        if (n.label) {
          ctx!.fillStyle = `rgba(${r},${g},${b},${isDark ? 0.22 : 0.14})`
          ctx!.fillText(n.label, n.x + n.r + 4, n.y + 3)
        }

        n.x += n.vx; n.y += n.vy
        if (n.x < -30) n.x = W + 30
        else if (n.x > W + 30) n.x = -30
        if (n.y < -30) n.y = H + 30
        else if (n.y > H + 30) n.y = -30
      })
    }

    resize()
    raf = requestAnimationFrame(draw)

    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
