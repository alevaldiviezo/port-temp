import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1><Link to="/">My Portfolio</Link></h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('about');
              }}
              className={currentPage === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('projects');
              }}
              className={currentPage === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('contact');
              }}
              className={currentPage === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;