import { useState } from 'react'
import './App.css'
import Navbar from './components/Nav/Navbar.jsx'
import Landing from './components/Landing/Landing.jsx'
import Dev from './components/Dev/Dev.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  const [activeScreen, setActiveScreen] = useState('landing')

  const handleNavigate = (screen) => {
    setActiveScreen(screen)
  }

  const screens = {
    landing: <Landing onNavigate={handleNavigate} />,
    dev: <Dev onNavigate={handleNavigate} />,
    contact: <Contact onNavigate={handleNavigate} />,
  }

  return (
    <>
      <Navbar activeScreen={activeScreen} onNavigate={handleNavigate} />
      <main className="app-shell">{screens[activeScreen]}</main>
    </>
  )
}

export default App
