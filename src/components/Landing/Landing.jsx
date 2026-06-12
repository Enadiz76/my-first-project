import React from 'react'

function Landing({ onNavigate }) {
  return (
    <section className="screen screen-landing">
      <p className="screen-eyebrow">Landing screen</p>
      <h1>Test Landing Screen</h1>
      <p className="screen-copy">Click a navbar item or one of the buttons below to swap screens.</p>
      <div className="screen-actions">
        <button type="button" onClick={() => onNavigate('dev')}>
          Open Dev
        </button>
        <button type="button" onClick={() => onNavigate('contact')}>
          Open Contact
        </button>
      </div>
    </section>
  )
}

export default Landing