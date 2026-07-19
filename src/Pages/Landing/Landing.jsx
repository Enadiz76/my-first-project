import React from 'react'
import Banner from '../../components/Banner/Banner'
import './Landing.css'

function Landing({ onNavigate }) {
  return (
    <section className="screen screen-landing">
      <div className="hero-container">
        <Banner />
        <div className="foreground-content">
          <button type="button" onClick={() => onNavigate('about')}>
            About
          </button>
          <button type="button" onClick={() => onNavigate('dev')} >
            Dev
          </button>
          <button type="button" onClick={() => onNavigate('resume')}>
            Resume
          </button>
          <button type="button" onClick={() => onNavigate('contact')}>
            Contacts
          </button>
        </div>
      </div>
    </section>
  )
}

export default Landing