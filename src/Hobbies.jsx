import React from 'react';

const Hobbies = () => {
  return (
    <section className="info-section" style={{background: '#181a1b', color: '#fff', padding: '32px 0 0 0'}}>
      <div className="container" style={{maxWidth: 700, margin: '0 auto'}}>
        <h1 className="section-header" style={{color: '#fff'}}>Projects & Interests</h1>
        <ul style={{color: '#ccc', fontSize: '1.1rem', marginBottom: 24, paddingLeft: 0, listStyle: 'none', textAlign: 'left'}}>
          <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Open-source contributor to Snyk Language Server and IDE plugins (IntelliJ, VSCode, Eclipse, Visual Studio)</li>
          <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Passionate about developer tooling, automation, and workflow improvements</li>
          <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Exploring AI and its applications in software engineering</li>
          <li style={{marginBottom: 8, paddingLeft: 24, position: 'relative'}}><span style={{position: 'absolute', left: 0, color: '#00bcd4'}}>•</span> Always eager to learn and experiment with new technologies</li>
        </ul>
        {/* Placeholder for future project images or links */}
        <div style={{display: 'flex', gap: 24, justifyContent: 'center'}}>
          <div style={{width: 120, height: 120, background: '#333', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: 18}}>
            Project Image
          </div>
          <div style={{width: 120, height: 120, background: '#333', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: 18}}>
            Project Image
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
