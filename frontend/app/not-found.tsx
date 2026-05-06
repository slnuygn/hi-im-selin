import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-white/50">404</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-white/75">
          The page you are looking for does not exist or was moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}