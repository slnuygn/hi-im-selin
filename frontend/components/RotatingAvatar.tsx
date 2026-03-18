'use client'

import { useState, useEffect, useCallback, useId } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

interface AvatarProps {
  images: Array<string | StaticImageData>
  interval?: number
}

export default function RotatingAvatar({ images, interval = 10000 }: AvatarProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const rightTriangleMaskId = useId().replace(/:/g, '')
  const leftTriangleMaskId = useId().replace(/:/g, '')

  const goToNextImage = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
      setIsTransitioning(false)
    }, 300)
  }, [images.length])

  useEffect(() => {
    // Rotation interval disabled - no automatic transitions
    return () => {}
  }, [goToNextImage, interval])

  return (
    <div className="relative w-full flex justify-center">
      {/* Phone and tablet: remove geometric shapes */}
      <div className="xl:hidden w-full">
        <div
          onClick={goToNextImage}
          className="relative w-1/2 aspect-square overflow-hidden rounded-full border-2 border-gray-700 bg-gray-700 cursor-pointer mx-auto"
        >
          {images.map((img, idx) => {
            const isCurrentImage = idx === currentIndex
            const isNextImage = idx === (currentIndex + 1) % images.length

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

        <div className="mt-2 mb-8 text-gray-300 text-center">
          <div className="text-3xl font-bold leading-tight">
            Selin Uygun
          </div>
          <div className="mt-2 text-xl font-medium leading-tight">Junior Software Engineer</div>
        </div>
      </div>

      {/* Desktop: keep geometric layout */}
      <div className="relative hidden xl:block" style={{ width: '456px', height: '256px' }}>
        {/* Container for rectangle and right triangle */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
          <div className="text-gray-300 font-bold text-5xl absolute -left-28 bottom-8 max-w-[140px] text-left leading-tight">
            Selin<br />Uygun
          </div>
          <div className="text-gray-300 font-medium text-2xl absolute -right-28 bottom-8 text-right leading-tight">
            Junior
            <br />
            Software
            <br />
            Engineer
          </div>
          <div className="flex items-end gap-0" style={{ transform: 'translateX(0px)' }}>
            {/* Right triangle (facing right, right angle at bottom-left) */}
            <div className="relative" style={{ width: '200px', height: '128px' }}>
              <svg
                viewBox="0 0 200 128"
                className="absolute inset-0 h-full w-full text-gray-300 dark:text-gray-700"
                aria-hidden="true"
              >
                <defs>
                  <mask id={`${rightTriangleMaskId}-cutout`}>
                    <rect x="0" y="0" width="200" height="128" fill="white" />
                    <circle cx="27" cy="-50" r="180" fill="black" />
                  </mask>
                </defs>
                <polygon
                  points="0,128 200,128 200,0"
                  fill="currentColor"
                  mask={`url(#${rightTriangleMaskId}-cutout)`}
                />
              </svg>
            </div>

            {/* Rectangle */}
            <div className="bg-gray-300 dark:bg-gray-700" style={{ width: '256px', height: '128px' }}></div>

            {/* Left triangle (mirrored on Y-axis, right angle at bottom-right) */}
            <div className="relative" style={{ width: '200px', height: '128px' }}>
              <svg
                viewBox="0 0 200 128"
                className="absolute inset-0 h-full w-full text-gray-300 dark:text-gray-700"
                aria-hidden="true"
              >
                <defs>
                  <mask id={`${leftTriangleMaskId}-cutout`}>
                    <rect x="0" y="0" width="200" height="128" fill="white" />
                    <circle cx="173" cy="-50" r="180" fill="black" />
                  </mask>
                </defs>
                <polygon
                  points="0,128 200,128 0,0"
                  fill="currentColor"
                  mask={`url(#${leftTriangleMaskId}-cutout)`}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Avatar circle */}
        <div
          onClick={goToNextImage}
          className="relative rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-700 cursor-pointer z-10"
          style={{ width: '256px', height: '256px', margin: '0 auto' }}
        >
          <div className="relative w-full h-full">
            {images.map((img, idx) => {
              const isCurrentImage = idx === currentIndex
              const isNextImage = idx === (currentIndex + 1) % images.length

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
