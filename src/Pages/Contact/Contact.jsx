import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsSubmitting(true)
        setStatus({ type: '', message: '' })

        const formElement = e.currentTarget
        const form = new FormData(formElement)

        const contact = {
            name: form.get('name'),
            email: form.get('email'),
            message: form.get('message'),
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact),
            })

            // if (!response.ok) {
            //     throw new Error('Unable to send your message.')
            // }

           
            if (!response.ok) {
                const errorText = await response.text()
                console.error('API error:', response.status, errorText)

                throw new Error(
                    `Unable to send your message. (${response.status})`
                )
            }



            setStatus({
                type: 'success',
                message: 'Thanks. Your message was sent.',
            })

            formElement.reset()

        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message || 'Something went wrong.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="screen screen-contact">
            <p className="screen-eyebrow">Let's Talk</p>

            <h1>Contact Me</h1>

            <p>
                Feel free to reach out to me for any inquiries or
                collaborations. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your visions.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                />

                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                />

                <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your Message"
                    rows="6"
                />

                <button
                    type="submit"
                    className="svg-send-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <span className="material-icons">send</span>
                </button>

            </form>

            {status.message && (
                <p className={`contact-status ${status.type}`}>
                    {status.message}
                </p>
            )}

            <footer className="screen-footer">
                <div className="screen-footer-links">
                    <a
                        href="https://www.linkedin.com/in/zidane-timothy-956466260/"
                        className="fa fa-linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                    />

                    <a
                        href="https://github.com/Enadiz76/"
                        className="fa fa-github"
                        target="_blank"
                        rel="noopener noreferrer"
                    />

                    <a
                        href="https://www.instagram.com/zid_g_t/"
                        className="fa fa-instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </div>
            </footer>
        </section>
    )
}

export default Contact

