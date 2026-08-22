import React from 'react'
import './About.css'
import LinkedIn from '../../assets/LinkedIn.jpg'

function About({ onNavigate }) {
  return (
    <section className="screen screen-about">
      <p className="screen-eyebrow">Get to know</p>
      <h1 className="">About me</h1>
      <div className="about-container">
        <aside className="about-card">
          <div className="about-card-image" aria-hidden="true">
            <img src={LinkedIn}  
                 alt="Zidane Timothy"
                 height="100"
                 width="100"
            />
          </div>
          <p className="about-card-label">Profile</p>
          <h2>Zidane Timothy</h2>
          <p className="about-card-label">
            Age: 23 <br></br>
            Based: Trinidad and Tobago <span class="tt-flag">&#x1F1F9;&#x1F1F9;</span>
          </p>
          <p className="about-card-copy">
            Computer Science graduate focused on web development, software engineering,
            machine learning, and embedded systems.
          </p>
          <ul className="about-card-list">
            <li>Innovation-driven problem solver</li>
            <li>Interested in robotics</li>
            <li>Open to learning new tools</li>
          </ul>
        </aside>
        <div className="about-content">
          <p> Hi, my name is Zidane Timothy, a Computer Science Graduate with a drive for innovation and problem-solving. I am currently developing my skills in web development, software engineering, Machine Learning and embedded systems with the end goal of breaking into Robotics.
              I believe in breaking down problems into their granular components and tackling them one step at a time. I am a firm believer in the power of collaboration and teamwork, and I enjoy working with others to achieve common goals. I am also a lifelong learner, always seeking to expand my knowledge and skills in order to stay ahead of the curve in this ever-evolving field.<br></br>
          </p>
          <p>
            <br></br>I advocate for the use of technology to improve people's lives and make the world a better place. I am passionate about using my skills to create innovative solutions that can have a positive impact on society. I am excited about the future of technology and the endless possibilities it holds, and I am committed to being a part of that future by contributing my skills and expertise to the field.<br></br>
          </p>
          <p>
            In my free time, I enjoy exploring new technologies, reading about the latest advancements in the field, and participating in online communities where I can learn from others and share my own knowledge. I am also an average gamer who uses video games as a way to unwind, relax after and catch up with friends after a long day. I've recently re-ntered the reading world and have been enjoying a variety of books. Lastly, I have been drawing and gyming as part of my dedicated stress relief, anti screens and mental health routines.
          </p>
          <p>
            I am excited to continue my journey in the field of computer science and technology, and I look forward to the opportunities and challenges that lye ahead. I am confident that with hard work, dedication, and a passion for learning, I can achieve my goals and make a meaningful contribution to the world of technology.
          </p>
        </div>
      </div>
   </section>
  )
}

export default About