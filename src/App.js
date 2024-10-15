import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
// import Home from './Home'; // Assuming you have a Home component
import About from './components/About'; // Assuming you have an About component
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
