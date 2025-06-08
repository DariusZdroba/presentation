import React from 'react';
import './CSS/infoSection.css';
import avatar from './images/avatar.png';

const InfoSection = () => {
  return (
    <section className="info-section hero-section" style={{background: '#181a1b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 0 0 0'}}>
      <div className="container" style={{textAlign: 'center'}}>
        <img src={avatar} alt="Profile avatar" style={{width: 120, height: 120, borderRadius: '50%', marginBottom: 24, border: '3px solid #333', objectFit: 'cover', objectPosition: 'top'}} />
        <h1 className="section-header" style={{color: '#fff', fontSize: '2.8rem', marginBottom: 8}}>Darius Zdroba</h1>
        <h2 style={{color: '#aaa', fontWeight: 400, fontSize: '1.5rem', marginBottom: 16}}>Associate Software Engineer @ Snyk</h2>
        <p style={{maxWidth: 600, margin: '0 auto 24px', color: '#ccc', fontSize: '1.1rem'}}>
          Engineer passionate about building secure, scalable software. Experienced in backend, IDE plugins, and open source. Always learning, especially in AI, automation, and developer workflows.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
