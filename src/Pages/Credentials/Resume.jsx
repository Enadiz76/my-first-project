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
          <li>Graduate Intern, Republic Bank, Jan 2026 - Present</li>
          <li>Intern, TWCU Credit Union, Aug 2024 - Aug 2024</li>
          <li>Intern, Central Bank of Trinidad and Tobago,  Jun 2023 - Aug 2023</li>
        </ul>
      </div>

      <div className="education-and-certs">
        <h2>Education and Certifications</h2>
        <ul>
          <li>Bachelor of Science in Computer Science, University of the West Indies, 2025</li>
          <li>Introduction to Data Science Certification, Allison.org, 2025</li>
        </ul>
      </div>

      <div className="screen-actions">
        <div className="download-resume-button">
          <a href="/Zidane Timothy Resume 2026.pdf" download="Zidane_Timothy_Resume_2026.pdf">Download</a>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Resume