import React from 'react'
import Banner from '../Banner/Banner'
import './Landing.css'

function Landing({ onNavigate }) {
  return (
    <section className="screen screen-landing">
      <div className="hero-container">
        {/* The moving background element  */}
        <Banner>
        </Banner>
        
        {/* The static foreground content */}
        <div className="foreground-content">
          <button>About me</button>
          <button>Projects</button>
          <button>Resume</button>
          <button>Socials</button>
        </div>
      </div>
    </section>
  )
}

export default Landing