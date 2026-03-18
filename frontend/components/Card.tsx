import React from 'react'

interface CardProps {
  title?: string
  children?: React.ReactNode
  techStack?: string
  className?: string
}

export default function Card({ title, children, techStack, className = '' }: CardProps) {
  const hasTechStack = Boolean(techStack?.trim())

  return (
    <div className={`bg-black rounded-2xl shadow-md p-6 ${className}`}>
      {title && (
        <h3 className={`text-xl font-semibold ${children ? 'mb-4' : ''}`}>{title}</h3>
      )}
      {children && <div>{children}</div>}
      {hasTechStack && (
        <div className={`${children ? 'mt-4' : ''} text-emerald-300`}>
          <span className="font-semibold">Tech Stack:</span>{' '}
          <span className="text-emerald-200">{techStack}</span>
        </div>
      )}
    </div>
  )
}
