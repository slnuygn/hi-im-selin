'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import RotatingAvatar from '@/components/RotatingAvatar'
import Card from '@/components/Card'
import profile1 from '@/assets/profile/1.jpeg'
import profile2 from '@/assets/profile/2.jpeg'
import profile3 from '@/assets/profile/3.jpeg'

export default function Home() {
  const timelineContainerRef = useRef<HTMLDivElement>(null)
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)
  const [lineStyle, setLineStyle] = useState<{ top: number; height: number }>({ top: 0, height: 0 })

  // Stack behavior: append new cards at the end of timelineCards, they render at the top.
  const renderedTimelineCards = [
    {
      title: 'Started Mugla Sitki Kocman University',
      content: 'Enrolled in the software engineering program at the engineering faculty.',
      techStack: '',
    },
    {
      title: 'UI UX Design',
      content: 'Designed a UI&UX for a school community and events platform mobile application project, actively participating in scrum meetings.',
      techStack: 'Figma, Scrum, Agile Methodologies',
    },
    {
      title: 'Car Database Architecture project',
      content: 'Built a database architecture with a public second-hand car dataset, established the necessary relationships, and tested it by connecting it to an intuitive web UI.',
      techStack: 'MySQL, Relational Database Design',
    },
    {
      title: 'ERP Workflow And Document Management Internship at Aksoy Cozum',
      content: 'Gained experience in ERP workflow optimization and successfully implemented document management processes and workflows using the eBA software system and SQL Server Management Studio.',
      techStack: 'eBA Document & Workflow Management system, SQL Server Management Studio',
    },
    {
      title: 'Arduino Projects',
      content: 'Built various Arduino projects with various sensor integrations and microcontroller programming with C++.',
      techStack: 'Arduino, C++, Embedded Systems',
    },
    {
      title: 'Unity 2D Platformer',
      content: 'Designed the assets, character animations, and added gameplay mechanics for a 2D platformer game using Unity and C#.',
      techStack: 'Unity, C#, 2D Game Design, Animation',
    },
    {
      title: 'Web Frontend Development Internship at Virtus Arge',
      content: 'Participated in a team and helped develop the frontend of a learning management system web application, implemented UI components and integrated them with backend APIs, tested application and requests with Docker and Postman, while actively using version control tools.',
      techStack: 'React, Tailwind CSS, JavaScript, HTML, CSS, Postman, Docker, Git',
    },
    {
      title: 'EEG Old vs Young Classification And Analysis',
      content: 'Preprocessed and analyzed EEG data of young and old subjects, extracted features and built machine learning pipelines to classify the two groups with high accuracy. Implemented a web dashboard for visualizing the results and insights from the analysis.',
      techStack: 'MATLAB, Fieldtrip, Python, PyTorch, Flask',
    },
    {
      title: 'Huddle: School Communities App',
      content: 'Designed and developed a mobile application for school community, event engagement and community hierarchy management with Dart, Flutter and used NoSQL Firebase for backend.',
      techStack: 'Flutter, Dart, Firebase',
    },
    {
      title: 'NeuroPAC: A Preprocessing, Analysis and Classification Framework for EEG Data',
      content: 'Built an open-source EEG data analysis framework, connected MATLAB operations and Fieldtrip functions with Python, with an intuitive PyQt interface. Used TensorFlow for deep learning and machine learning pipelines and tested the framework on public EEG datasets.',
      techStack: 'Python, MATLAB, FieldTrip, PyQt, TensorFlow',
    },
    {
      title: 'Graduated Mugla Sitki Kocman University',
      content: 'Graduated with a degree in Software Engineering, with a GPA of 3.47 on a 4.0 scale.',
      techStack: '',
    },
    {
      title: 'Web-Based Learning Management System',
      content: 'Currently developing a web-based learning management system, using a microservices architecture. Planning to stress-test it on a local Kubernetes cluster using Minikube to validate scalability and resilience before production-style deployment.',
      techStack: 'TypeScript, Node.js, NestJS, PostgreSQL, Redis, RabbitMQ, Prisma, Docker, Next.js, Kubernetes',
    },
  ].reverse()

  useLayoutEffect(() => {
    const updateLine = () => {
      const timelineContainer = timelineContainerRef.current
      const topRow = topRowRef.current
      const bottomRow = bottomRowRef.current

      if (!timelineContainer || !topRow || !bottomRow) {
        return
      }

      const containerRect = timelineContainer.getBoundingClientRect()
      const topRect = topRow.getBoundingClientRect()
      const bottomRect = bottomRow.getBoundingClientRect()

      const topCenter = topRect.top - containerRect.top + topRect.height / 2
      const bottomCenter = bottomRect.top - containerRect.top + bottomRect.height / 2

      setLineStyle({
        top: topCenter,
        height: Math.max(bottomCenter - topCenter, 0),
      })
    }

    updateLine()
    window.addEventListener('resize', updateLine)

    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(updateLine)
      if (timelineContainerRef.current) {
        resizeObserver.observe(timelineContainerRef.current)
      }
      if (topRowRef.current) {
        resizeObserver.observe(topRowRef.current)
      }
      if (bottomRowRef.current) {
        resizeObserver.observe(bottomRowRef.current)
      }
    }

    return () => {
      window.removeEventListener('resize', updateLine)
      resizeObserver?.disconnect()
    }
  }, [renderedTimelineCards.length])

  const avatarImages = [profile1, profile2, profile3]

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 xl:p-24">
      <RotatingAvatar images={avatarImages} interval={10000} />
      <div className="w-full max-w-6xl flex flex-col items-center">
        <div className="bg-gradient-to-b from-gray-300 to-gray-800 dark:from-gray-700 dark:to-gray-900 rounded-lg p-12 shadow-lg w-full flex flex-col gap-8 relative">
          <div ref={timelineContainerRef} className="relative flex flex-col gap-2">
            {/* Center timeline line */}
            <div
              className="absolute left-1/2 w-1 bg-white -translate-x-1/2"
              style={{ top: `${lineStyle.top}px`, height: `${lineStyle.height}px` }}
            ></div>

            {/* Timeline cards */}
            {renderedTimelineCards.map((card, index) => {
              const isLeft = index % 2 === 0
              const rowRef =
                index === 0
                  ? topRowRef
                  : index === renderedTimelineCards.length - 1
                  ? bottomRowRef
                  : undefined

              return (
                <div
                  key={card.title}
                  ref={rowRef}
                  className={`w-full flex relative justify-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {isLeft ? (
                    <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 ml-2 hidden md:flex items-center">
                      <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                      <div className="h-0.5 w-12 bg-white"></div>
                    </div>
                  ) : (
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -ml-2 hidden md:flex items-center">
                      <div className="h-0.5 w-12 bg-white"></div>
                      <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                    </div>
                  )}

                  <div className="w-full md:w-5/12 relative">
                    <Card title={card.title} techStack={card.techStack}>{card.content}</Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
