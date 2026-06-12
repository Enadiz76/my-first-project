import React from 'react'
import './Dev.css'

function Dev({ onNavigate }) {

    return (
            <section className="screen screen-dev">
                <h1>Test Dev screen</h1>



                {/* Commented to maybe use later */}

                {/* <p className="screen-eyebrow">Development screen</p>
                <h1>This is a Dev test</h1>
                <p className="screen-copy">Use the navbar to jump back to Landing or over to Contact.</p>
                <div className="screen-actions">
                    <button type="button" onClick={() => onNavigate('landing')}>
                        Back to Landing
                    </button>
                    <button type="button" onClick={() => onNavigate('contact')}>
                        Go to Contact
                    </button>
                </div> */}
            </section>
        )
}
export default Dev