import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <main className="grid min-h-screen page place-items-center">
      <div className="max-w-prose">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 display">Not found</h1>
        <p className="mt-6 lede max-w-[24ch]">
          This page doesn&apos;t exist, or it moved.
        </p>
        <Link to="/" className="mt-10 button">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
          Back home
        </Link>
      </div>
    </main>
  )
}
