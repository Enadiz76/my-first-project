import React from 'react'
import './Dev.css'

function Dev({ onNavigate }) {

  return (
    <section className="screen screen-dev">
      <p className="screen-eyebrow">Development</p>
      <h1>Dev</h1>
      <p className="screen-copy">This is the development page.</p>
      <div className="screen-actions">
        <button type="button" onClick={() => onNavigate('landing')}>
          Back to Landing
        </button>
        <button type="button" onClick={() => onNavigate('about')}>
          About
        </button>
        <button type="button" onClick={() => onNavigate('resume')}>
          Resume
        </button>
        <button type="button" onClick={() => onNavigate('contact')}>
          Contacts
        </button>
      </div>
    </section>
  )
}
export default Dev