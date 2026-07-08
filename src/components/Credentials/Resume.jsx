import React from 'react'
import './Resume.css'

function Resume({ onNavigate }) {
  return (
    <section className="screen screen-resume">
      <p className="screen-eyebrow">Resume</p>
      <h1>Resume</h1>
      <p className="screen-copy">This is the resume page.</p>
      <div className="screen-actions">
        <button type="button" onClick={() => onNavigate('landing')}>
          Back to Landing
        </button>
      </div>
    </section>
  )
}

export default Resume