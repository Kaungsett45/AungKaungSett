import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '../component/ThemeToggle'
import { profile, sections } from '../data/content'

export default function SiteHeader() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:bg-accent-wash focus:text-accent"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md">
        <nav className="flex items-center justify-between h-16 page">
          <Link to="/" className="heading-brand !text-lg sm:!text-xl">
            PORTFOLIO
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            {onHome && (
              <ul className="items-center hidden gap-6 mr-4 list-none lg:flex">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="transition-colors text-meta text-ink-faint hover:text-ink">
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <a
              className="button"
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
            >
              Résumé
            </a>

            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  )
}
