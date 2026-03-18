'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

interface AvatarProps {
  images: string[]
  interval?: number
}

export default function RotatingAvatar({ images, interval = 10000 }: AvatarProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { theme } = useTheme()

  const goToNextImage = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
      setIsTransitioning(false)
    }, 300)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextImage()
    }, interval)

    return () => clearInterval(timer)
  }, [goToNextImage, interval])

  const borderColor = theme === 'dark' ? 'rgb(55, 65, 81)' : 'rgb(209, 213, 219)'

  return (
    <div className="relative w-full flex justify-center">
      <div className="relative" style={{ width: '456px', height: '256px' }}>
        {/* Container for rectangle and right triangle */}
        <div className="absolute bottom-0 flex items-end gap-0" style={{ width: '456px' }}>
          {/* Rectangle */}
          <div className="bg-gray-300 dark:bg-gray-700" style={{ width: '256px', height: '128px' }}></div>

          {/* Right triangle (facing right, right angle at bottom-left) */}
          <div
            style={{
              width: '0',
              height: '0',
              borderStyle: 'solid',
              borderWidth: '0 0 128px 200px',
              borderColor: `transparent transparent ${borderColor} transparent`,
            }}
          ></div>
        </div>

        {/* Avatar circle */}
        <div
          onClick={goToNextImage}
          className="relative rounded-full overflow-hidden border-8 border-gray-300 dark:border-gray-700 cursor-pointer z-10"
          style={{ width: '256px', height: '256px', margin: '0 auto' }}
        >
      <div className="relative w-full h-full">
        {images.map((img, idx) => {
          const isCurrentImage = idx === currentIndex
          const isNextImage = idx === (currentIndex + 1) % images.length
          const shouldShow = isCurrentImage || (isTransitioning && isNextImage)
          
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                isCurrentImage && !isTransitioning
                  ? 'opacity-100'
                  : isCurrentImage && isTransitioning
                  ? 'opacity-0'
                  : isNextImage && isTransitioning
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <Image
                src={img}
                alt={`Profile ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
                unoptimized
              />
            </div>
          )
        })}
      </div>
      </div>
      </div>
    </div>
  )
}
