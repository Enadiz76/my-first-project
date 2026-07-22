import React from 'react'
import './Contact.css'


function Contact({ onNavigate }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        //Here will use fast API to handle a post request to a backend server 
        // that will send the email to my email address.
    }

    return (
            <section className="screen screen-contact">
                <p className="screen-eyebrow">Let's Talk</p>
                <h1>Contact Me</h1>

                <p >Feel free to reach out to me for any inquiries or collaborations. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

                <form className="contact-form">
                    <input type="text" id="name" name="name" required placeholder="Your Name" />
                    <input type="email" id="email" name="email" required placeholder="Your Email" />
                    <input type="text" id="message" name="message" required placeholder="Your Message" />
                    <button type="submit" className="svg-send-btn" onClick={(e) => {handleSubmit(e)}}>
                        Send Message <span class="material-icons">send</span>
                    </button>
                </form>

            <footer className="screen-footer">
                <div className="screen-footer-links">
                    <a href="https://www.linkedin.com/in/zidane-timothy-956466260/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BcfJbgq7KTnuz%2FCD9Ff%2B%2FWg%3D%3D" class="fa fa-linkedin"></a>
                    <a href="https://github.com/Enadiz76/" class="fa fa-github"></a>
                    <a href="https://www.instagram.com/zid_g_t/" class="fa fa-instagram"></a>
                </div>
            </footer>
            </section>
            
        )
}
export default Contact