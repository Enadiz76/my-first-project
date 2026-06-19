import React from 'react'
import './Landing.css'

function Landing({ onNavigate }) {
  return (
    <section className="screen screen-landing">
      <div className="container">
        <div className="background-element">
          <p className="screen-eyebrow">Landing screen</p>
          <h1>Test Landing Screen</h1>
          <p className="screen-copy">Click a navbar item or one of the buttons below to swap screens.</p>
          <div className='infinite-scrolling'></div>
        </div>
        {/* <div className="navigation-links"> */}
          <div className="foreground-element">
            <button type="button" onClick={() => onNavigate('dev')}>
            Open Dev
          </button>
          <button type="button" onClick={() => onNavigate('contact')}>
            Open Contact
          </button>
          </div>
        {/* </div> */}
      </div>
    </section>
  )
}

export default Landing