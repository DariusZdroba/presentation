import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background: '#181a1b', padding: '0.5rem 2rem'}}>
      <div className="container-fluid" style={{padding: 0}}>
        <Link className="navbar-brand" to="/">Darius-Beniamin Zdroba</Link>
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
              <Link className="nav-link" to="/">Home</Link>
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
  );
}

export default Navbar;
