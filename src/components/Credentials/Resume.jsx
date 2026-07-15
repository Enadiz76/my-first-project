import React from 'react'
import './Resume.css'

function Resume({ onNavigate }) {
  return (
    <section className="screen screen-resume">
      <p className="screen-eyebrow">This is my</p>
      <h1>Resume</h1>


      <div className="resume-container">
        <div className="key-skills">
        <h2>Key Soft Skills</h2>
        <ul>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem Solving</li>
          <li>Adaptability</li>
          <li>Time Management</li>
        </ul>
      </div>

      <div className="most-recent-employment">
        <h2>Most Recent Employment</h2>
        <ul>
          <li>Job Title, Company Name, Duration</li>
          <li>Job Title, Company Name, Duration</li>
          <li>Job Title, Company Name, Duration</li>
        </ul>
      </div>

      <div className="education-and-certs">
        <h2>Education and Certifications</h2>
        <ul>
          <li>Degree, Institution, Year</li>
          <li>Degree, Institution, Year</li>
          <li>Degree, Institution, Year</li>
        </ul>
      </div>

      <div className="screen-actions">
        <div className="download-resume-button">
          <a href="/Zidane Timothy Resume 2026.pdf" download="Desired_FileName.pdf">Download</a>

        </div>
      </div>

      </div>
    </section>
  )
}

export default Resume