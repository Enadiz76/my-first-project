import React from 'react'
import { SiCss, SiHtml5, SiJavascript, SiPython, SiReact } from 'react-icons/si'
import './Dev.css'
import Skills from '../../components/Dev/Skills Section/Skills.jsx'

function Dev() {
  

  return (
    <section className="screen screen-dev">
      <p className="screen-eyebrow">Development</p>
      <h1>Dev</h1>
      <h2>Development Skills</h2>
      <section className="dev-section-one">
        <div className="skills">
          <Skills />
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