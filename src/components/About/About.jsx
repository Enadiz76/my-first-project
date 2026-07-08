import React from 'react'
import './About.css'

function About({ onNavigate }) {
  return (
    <section className="screen screen-about">
      <p className="screen-eyebrow">About</p>
      <h1>About me</h1>
      <p className="screen-copy">This is the about page.</p>
      <div className="screen-actions">
        <button type="button" onClick={() => onNavigate('landing')}>
          Back to Landing
        </button>
      </div>
    </section>
  )
}

export default About