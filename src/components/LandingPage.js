import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import profileImage from '../assets/profile-image.jpg';
import projectImage1 from '../assets/project1.jpg';
import projectImage2 from '../assets/project2.jpg';
import projectImage3 from '../assets/project3.jpg';
import projectImage4 from '../assets/project4.jpg';

const LandingPage = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-original colored' },
  ];

  const projects = [
    { title: 'E-commerce Platform', image: projectImage1, description: 'A full-stack e-commerce solution built with React and Node.js' },
    { title: 'Task Management App', image: projectImage2, description: 'A responsive web app for managing tasks and projects' },
    { title: 'Data Visualization Dashboard', image: projectImage3, description: 'Interactive data visualizations using D3.js and React' },
    { title: 'AI-powered Chatbot', image: projectImage4, description: 'A machine learning chatbot built with Python and TensorFlow' },
  ];

  return (
    <div className="landing-page">
      <nav className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="header-content">
          <h1>John Doe</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <img src={profileImage} alt="John Doe" className="profile-image" />
          <div className="hero-text">
            <h1>John Doe</h1>
            <p>Full-Stack Developer & UI/UX Enthusiast</p>
            <a href="#contact" className="cta-button">Get in Touch</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section id="about" className="about-section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a passionate developer with 5 years of experience in creating web applications. I specialize in React, Node.js, and Python, and I love turning complex problems into simple, beautiful, and intuitive designs.</p>
              <p>With a strong foundation in both front-end and back-end development, I strive to create seamless, user-friendly experiences that solve real-world problems.</p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={`#project-${index + 1}`} className="project-link">Learn More</a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p><i className="fas fa-envelope"></i> johndoe@example.com</p>
              <p><i className="fas fa-phone"></i> +1 (123) 456-7890</p>
              <p><i className="fas fa-map-marker-alt"></i> New York, NY</p>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;