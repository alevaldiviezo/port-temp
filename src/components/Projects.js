import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="project-item">
            <img src={`https://via.placeholder.com/300x200?text=Project ${num}`} alt={`Project ${num}`} />
            <h3>Project {num}</h3>
            <p>Detailed description of Project {num}</p>
            <a href={`#project-${num}`} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;