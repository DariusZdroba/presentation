import React from 'react';
import './CSS/style.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a 
        href="https://github.com/dariuszdroba/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="bi bi-github h3"></i>
      </a>
      <a 
        href="https://www.linkedin.com/in/darius-zdroba-065a71256/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
      <i class="m-3 bi bi-linkedin h3"></i>

      </a>
      <a 
        href="https://www.instagram.com/dariuszdroba/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
      <i class="bi bi-instagram h3"></i>

      </a>

    </div>
  );
};

export default SocialLinks;
