import { useState } from 'react'
import './App.css'
import Navbar from './components/Nav/Navbar.jsx'
import Landing from './components/Landing/Landing.jsx'
import About from './components/About/About.jsx'
import Dev from './components/Dev/Dev.jsx'
import Resume from './components/Credentials/Resume.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  const [activeScreen, setActiveScreen] = useState('landing')

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
      {activeScreen !== 'landing' && (
        <Navbar activeScreen={activeScreen} onNavigate={handleNavigate} />
      )}
      <main className="app-shell">{screens[activeScreen]}</main>
    </>
  )
}

export default App
