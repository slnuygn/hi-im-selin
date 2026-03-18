'use client'

import RotatingAvatar from '@/components/RotatingAvatar'

export default function Home() {
  const avatarImages = [
    '/assets/profile/1.jpeg',
    '/assets/profile/2.jpeg',
    '/assets/profile/3.jpeg',
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <RotatingAvatar images={avatarImages} interval={10000} />
        <div className="bg-gray-300 dark:bg-gray-700 rounded-lg p-12 min-h-screen shadow-lg w-full">
          {/* Your content goes here */}
        </div>
      </div>
    </main>
  )
}
