import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ activeScreen, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { name: 'Landing', screen: 'landing' },
    { name: 'Dev', screen: 'dev' },
    { name: 'Contact', screen: 'contact' },
  ]

  const handleNavigate = (screen) => {
    onNavigate(screen)
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button type="button" className="logo" onClick={() => handleNavigate('landing')}>
          MySite
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                type="button"
                className={activeScreen === link.screen ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavigate(link.screen)}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
        <button type="button" className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? 'bar rotate-bar1' : 'bar'}></div>
          <div className={isOpen ? 'bar hide-bar2' : 'bar'}></div>
          <div className={isOpen ? 'bar rotate-bar3' : 'bar'}></div>
        </button>
      </div>
    </nav>
  )
}
export default Navbar