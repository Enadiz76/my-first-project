import React from 'react'
import { SiCss, SiHtml5, SiJavascript, SiPython, SiReact } from 'react-icons/si'
import './Dev.css'

function Dev() {
  // Coding skills
  const skills = [
    {
      id: 'html',
      className: 'html',
      delay: '0s',
      icon: SiHtml5,
      label: 'HTML',
    },
    {
      id: 'css',
      className: 'css',
      delay: '0.5s',
      icon: SiCss,
      label: 'CSS',
    },
    {
      id: 'js',
      className: 'js',
      delay: '0.2s',
      icon: SiJavascript,
      label: 'JavaScript',
    },
    {
      id: 'python',
      className: 'python',
      delay: '0.7s',
      icon: SiPython,
      label: 'Python',
    },
    {
      id: 'react  ',
      className: 'react',
      delay: '0.7s',
      icon: SiReact,
      label: 'React',
    },
  ]

  return (
    <section className="screen screen-dev">
      <p className="screen-eyebrow">Development</p>
      <h1>Dev</h1>
      <h2>Development Skills</h2>
      <section className="dev-section-one">
        <div className="languages-and-tools">
          <h2>Languages & Tools:</h2>
          <div className="bubble-container">
          {skills.map(({ id, className, delay, icon: Icon, label }) => (
            <div key={id} className={`bubble ${className}`} style={{ '--animation-delay': delay }}>
              <Icon className="skill-icon" aria-hidden="true" />
              <span className="sr-only">{label}</span>
            </div>
          ))}
        </div>

        
        </div>
      </section>

      <section className="dev-section-two">
        <div className="projects">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="bg-track">
              <div className="card-overlay bg-track">
                <img src="image.jpg" alt=""></img>
                <div className="card-overlay__text">
                  <h3>Overlay Title</h3>
                  <p>Project preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
export default Dev