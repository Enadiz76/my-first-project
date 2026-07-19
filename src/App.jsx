import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Nav/Navbar.jsx'
import Landing from './Pages/Landing/Landing.jsx'
import About from './Pages/About/About.jsx'
import Dev from './Pages/Dev/Dev.jsx'
import Resume from './Pages/Credentials/Resume.jsx'
import Contact from './Pages/Contact/Contact.jsx'

function App() {
  const [activeScreen, setActiveScreen] = useState('landing')
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')

    const updateMobileView = () => {
      setIsMobileView(mediaQuery.matches)
    }

    updateMobileView()
    mediaQuery.addEventListener('change', updateMobileView)

    return () => {
      mediaQuery.removeEventListener('change', updateMobileView)
    }
  }, [])

  const handleNavigate = (screen) => {
    setActiveScreen(screen)
  }

  const screens = {
    landing: <Landing onNavigate={handleNavigate} />,
    about: <About onNavigate={handleNavigate} />,
    dev: <Dev onNavigate={handleNavigate} />,
    resume: <Resume onNavigate={handleNavigate} />,
    contact: <Contact onNavigate={handleNavigate} />,
  }

  return (
    <>
      {(activeScreen !== 'landing' || isMobileView) && (
        <Navbar activeScreen={activeScreen} onNavigate={handleNavigate} />
      )}
      <main className="app-shell">{screens[activeScreen]}</main>
    </>
  )
}

export default App
