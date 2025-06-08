import React from 'react';
import './CSS/infoSection.css';

const About = () => {
  return (
    <section className="info-section" style={{background: '#181a1b', color: '#fff', padding: '32px 0 0 0'}}>
      <div className="container" style={{maxWidth: 700, margin: '0 auto'}}>
        <h1 className="section-header" style={{color: '#fff'}}>About Me</h1>
        <p style={{color: '#ccc', fontSize: '1.1rem', marginBottom: 24}}>
          I am a software engineer with a strong academic background and a passion for technology. I hold a Master's degree (in progress) in Computer Science from UBB Cluj-Napoca and a Licentiate degree from the University of Oradea. Fluent in Hungarian, Romanian, and English, with elementary German. I believe in using the right tools to solve problems, and I enjoy working across the stack, with a focus on backend and security.
        </p>
        <ul style={{color: '#aaa', fontSize: '1.05rem', marginBottom: 0, paddingLeft: 0, listStyle: 'none', textAlign: 'left'}}>
          <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Engineer first: tool-agnostic, problem solver</li>
          <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Backend, security, and IDE plugin experience</li>
          <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Open to learning and exploring new technologies (AI, automation, workflows)</li>
        </ul>
      </div>
    </section>
  );
};

export default About;