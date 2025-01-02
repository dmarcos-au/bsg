'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function AboutParallaxImage() {
  const imageRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !containerRef.current) return
      const container = containerRef.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const rate = Math.min(scrolled * 0.15, container.height / 2) // Limit the parallax movement
      imageRef.current.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-hidden h-[400px]">
      <div ref={imageRef} className="relative transition-transform duration-200 ease-out">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery-2-giViDvDqNlD8jCugJhaK132ywtN8Hw.png"
          alt="Building Spaces Group Team Collaboration"
          width={500}
          height={333}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  )
}

