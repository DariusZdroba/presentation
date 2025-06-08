import React from 'react';
import './CSS/style.css';

const Development = () => {
  return (
    <section className="info-section" style={{background: '#181a1b', color: '#fff', padding: '32px 0 0 0'}}>
      <div className="container" style={{maxWidth: 700, margin: '0 auto'}}>
        <h1 className="section-header" style={{color: '#fff'}}>Experience</h1>
        <div style={{marginBottom: 24}}>
          <h2 style={{color: '#fff', fontSize: '1.3rem', marginBottom: 4}}>Snyk</h2>
          <div style={{color: '#aaa', fontSize: '1.05rem', marginBottom: 4}}>Associate Software Engineer (Oct 2024 – Present)</div>
          <div style={{color: '#aaa', fontSize: '1.05rem', marginBottom: 12}}>R&D Engineering Intern (Jul 2024 – Oct 2024)</div>
          <ul style={{color: '#ccc', fontSize: '1.05rem', marginBottom: 0, paddingLeft: 0, listStyle: 'none', textAlign: 'left'}}>
            <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Contributed to open-source projects, including the Snyk Language Server and IDE plugins (IntelliJ, VSCode, Eclipse, Visual Studio)</li>
            <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Focused on backend development, security, and developer tooling</li>
            <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Collaborated with cross-functional teams to deliver secure, scalable solutions</li>
            <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Explored and implemented automation and workflow improvements</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Development;
