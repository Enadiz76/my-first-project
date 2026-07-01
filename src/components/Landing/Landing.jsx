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
          <h1>Stunning Foreground</h1>
          <p>This text stays perfectly still while the background moves behind it.</p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Landing