import React from 'react'

export default function SocialFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-transparent py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          <a href="https://www.linkedin.com/in/slnuygn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.291c-.966 0-1.75-.787-1.75-1.759s.784-1.75 1.75-1.75c.966 0 1.75.784 1.75 1.75s-.784 1.759-1.75 1.759zm13.5 10.291h-3v-4.5c0-1.072-.021-2.449-1.492-2.449-1.494 0-1.722 1.166-1.722 2.375v4.574h-3v-9h2.879v1.229h.041c.401-.761 1.379-1.562 2.837-1.562 3.034 0 3.596 1.998 3.596 4.596v4.737z" />
            </svg>
            <div>
              <div className="text-xl font-bold group-hover:underline">LinkedIn</div>
              <div className="text-sm text-white/80 break-all group-hover:underline">
                https://www.linkedin.com/in/slnuygn/
              </div>
            </div>
          </a>

          <a href="https://github.com/slnuygn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.135-.304-.54-1.527.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.649.24 2.872.12 3.176.765.84 1.23 1.911 1.23 3.221 0 4.61-2.805 5.62-5.475 5.92.429.369.81 1.096.81 2.214 0 1.598-.015 2.887-.015 3.279 0 .321.21.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <div>
              <div className="text-xl font-bold group-hover:underline">GitHub</div>
              <div className="text-sm text-white/80 break-all group-hover:underline">
                https://github.com/slnuygn
              </div>
            </div>
          </a>

          <a href="https://www.youtube.com/@slnuygn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.117C19.59 3.5 12 3.5 12 3.5s-7.59 0-9.388.569A2.997 2.997 0 0 0 .502 6.186C0 8.004 0 12 0 12s0 3.996.502 5.814a2.997 2.997 0 0 0 2.11 2.117C4.41 20.5 12 20.5 12 20.5s7.59 0 9.388-.569a2.997 2.997 0 0 0 2.11-2.117C24 15.996 24 12 24 12s0-3.996-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
            <div>
              <div className="text-xl font-bold group-hover:underline">YouTube</div>
              <div className="text-sm text-white/80 break-all group-hover:underline">
                https://www.youtube.com/@slnuygn
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
