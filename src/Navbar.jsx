import React from 'react';
import './CSS/style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navDiv">
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid" id="navMenu">
        <a className="navbar-brand" href="/">Darius-Beniamin Zdroba</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                About
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about/personal">Personal</Link></li>
                <li><Link className="dropdown-item" to="/about/development">Career</Link></li>
                <li><Link className="dropdown-item" to="/about/hobbies">Hobbies</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
