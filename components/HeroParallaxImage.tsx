'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroParallaxImage() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return
      const scrolled = window.scrollY
      const rate = scrolled * 0.1
      imageRef.current.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={imageRef} className="relative transition-transform duration-200 ease-out">
      {/* The update is already present in the existing code, no changes needed */}
      <Image
        src="/images/machine-home.png"
        alt="Secure Building Management System"
        width={500}
        height={400}
        className="relative z-10"
        priority
      />
    </div>
  )
}

