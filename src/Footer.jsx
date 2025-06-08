import React from 'react'

const Footer = () => {
  return (
    <footer style={{background: '#181a1b', color: '#aaa', padding: '24px 0', marginTop: 32}}>
      <div className="container text-center">
        <div style={{marginBottom: 8}}>
          <a href="mailto:dariuszdroba@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: '#aaa', margin: '0 12px'}}><i className="bi bi-envelope h4"></i></a>
          <a href="https://github.com/DariusZdroba" target="_blank" rel="noopener noreferrer" style={{color: '#aaa', margin: '0 12px'}}><i className="bi bi-github h4"></i></a>
          <a href="https://www.linkedin.com/in/darius-zdroba-065a71256/" target="_blank" rel="noopener noreferrer" style={{color: '#aaa', margin: '0 12px'}}><i className="bi bi-linkedin h4"></i></a>
        </div>
        <p style={{margin: 0, fontSize: '1rem'}}>
          © 2025 Darius Zdroba. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer