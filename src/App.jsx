import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SiteHeader from './pages/Nav'
import SiteFooter from './pages/Footer'
import SplashScreen from './pages/Splashscreen'

// Shown once per browser tab. Returning to the site from another page
// shouldn't make you sit through it again.
const SPLASH_KEY = 'splash-seen'

export default function App() {
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem(SPLASH_KEY)
  )

  useEffect(() => {
    if (!showSplash) return

    const timer = setTimeout(() => {
      sessionStorage.setItem(SPLASH_KEY, '1')
      setShowSplash(false)
    }, 1100)

    return () => clearTimeout(timer)
  }, [showSplash])

  return (
    <>
      {showSplash && <SplashScreen />}

      <div id="top" className="min-h-screen">
        <SiteHeader />

        <main id="main" className="page">
          <Outlet />
          <SiteFooter />
        </main>
      </div>
    </>
  )
}
