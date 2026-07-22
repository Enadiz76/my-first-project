import React from 'react'
import './Dev.css'
import Skills from '../../components/Dev/Skills Section/Skills.jsx'
import ProjectGrid from '../../components/Dev/Project Grid/ProjectGrid.jsx'

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
          <ProjectGrid />
        </div>
      </section>
    </section>
  )
}
export default Dev