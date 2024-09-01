import React from 'react';
import './CSS/infoSection.css'; 
import SocialLinks from './SocialLinks';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="container">
        <h1 className="section-header">Welcome!</h1>
        <p className="section-paragraph">
          Heya 👋🏼!        
            </p>
        <p className="section-paragraph">
          This blog is my way of summarizing who I am 😌.
        </p>
        <p className="section-paragraph">
          I love technology, traveling, sports, so expect anything from travelling pics 🚂, cooking, food 🍔, to tech projects 🧑🏽‍💻 and sports 🏃🏽‍♂️⚽. 
        </p>

        <p className="section-paragraph">
          <br />
      I will leave some contact info here, don't need to search for the About page 😉.  
      <br />
      <br />
      For any colaborations, chatting, connecting, I am open to do so, hit me up!
      <br />
      
        <SocialLinks />
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
