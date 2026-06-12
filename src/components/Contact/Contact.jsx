import React from 'react'
import './Contact.css'

function Contact({ onNavigate }) {

    return (
            <section className="screen screen-contact">
                <h1>Test Contact screen</h1>



                {/* Commented to maybe use later */}
                {/* <p className="screen-eyebrow">Contact screen</p>
                <h1>This is a contact test</h1>
                <p className="screen-copy">This view is also switched by the top navigation buttons.</p>
                <div className="screen-actions">
                    <button type="button" onClick={() => onNavigate('landing')}>
                        Back to Landing
                    </button>
                    <button type="button" onClick={() => onNavigate('dev')}>
                        Go to Dev
                    </button>
                </div> */}
            </section>
        )
}
export default Contact