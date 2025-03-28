"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  decimals?: number
}

export function AnimatedCounter({ end, duration = 2, decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const multiplier = 10 ** decimals

  useEffect(() => {
    const startTime = Date.now()
    const endValue = end * multiplier

    const interval = setInterval(() => {
      const now = Date.now()
      const elapsedTime = now - startTime
      const progress = Math.min(elapsedTime / (duration * 1000), 1)

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(progress)

      countRef.current = Math.floor(easedProgress * endValue)
      setCount(countRef.current)

      if (progress === 1) {
        clearInterval(interval)
      }
    }, 16) // ~60fps

    return () => clearInterval(interval)
  }, [end, duration, multiplier])

  return <>{(count / multiplier).toFixed(decimals)}</>
}

