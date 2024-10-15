import React from 'react';
import './About.css';

const About = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      year: "2018-2020",
      description: "Specialized in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Massachusetts Institute of Technology",
      year: "2014-2018",
      description: "Minor in Data Science"
    },
    {
      degree: "High School Diploma",
      institution: "Tech High School",
      year: "2010-2014",
      description: "Valedictorian, President of Computer Science Club"
    }
  ];

  return (
    <div className="about">
      <h2>About Me</h2>
      <section className="education">
        <h3>Education</h3>
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h4>{edu.degree}</h4>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;