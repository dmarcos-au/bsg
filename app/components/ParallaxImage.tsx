'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function ParallaxImage() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return
      const scrolled = window.scrollY
      const rate = scrolled * 0.15
      imageRef.current.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary opacity-20" />
      <div ref={imageRef} className="relative transition-transform duration-200 ease-out">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hand-phone-0myjAKxL6ZpRSQrV1PzbqoP02E8tZa.png"
          alt="Intenant App Interface"
          width={400}
          height={800}
          className="relative z-10"
          priority
        />
      </div>
    </div>
  )
}

