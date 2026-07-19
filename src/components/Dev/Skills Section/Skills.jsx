import React from "react";
import { SiHtml5, SiCss, SiJavascript, SiPython, SiReact } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { id: "html", className: "html", delay: "0s", icon: SiHtml5, label: "HTML" },
    { id: "css", className: "css", delay: "0.5s", icon: SiCss, label: "CSS" },
    { id: "js", className: "js", delay: "0.2s", icon: SiJavascript, label: "JavaScript" },
    { id: "python", className: "python", delay: "0.7s", icon: SiPython, label: "Python" },
    { id: "react", className: "react", delay: "0.7s", icon: SiReact, label: "React" },
    ];
  


    return (
        <section className="skills-section">
            <h2>Skills</h2>
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
    );
}
export default Skills