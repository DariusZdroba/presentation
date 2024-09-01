import React from 'react'
import './CSS/infoSection.css'; 
import castle from "./images/castle.jpg"
const About = () => {
  return (
    <section className="info-section">
    <div className="container">
      <h1 className="section-header">About me!</h1>
      <p className="section-paragraph">
        I am from a small romanian city 🇷🇴, called Carei, it has an intresting history with and there's a cool castle in the middle of the city <span className='h2'>🏰</span>.
          </p>
          <img src={castle} alt="Karolyi Castle" className="img-fluid rounded w-50 border border-primary" />
        
          <br />
          <br />
          <p className="section-paragraph">
        I was born here, and spent most of my teenage years, but as for my childhood <span className='h3'>🧒🏽</span>, I grew up in a small village with an active childhood,
        having many cousins<span className='h4'>🧒🏽🧒🏼👧🏼👧🏽</span>, days spent running around and playing outside<span className='h3'>🚴🏼🌞</span> , even though it was not a lavish childhood <span className='h3'>💸</span> , 
        there's nothing I would change about it <span className='h3'>💌</span>.
      </p>

      <br /> 
      <br />
      <p className="section-paragraph">
        The main takeaway from my childhood is that I was a <b>little devil</b> <span className='h3'>😈</span>, I would climb up anywhere I could,
        in the atic, on the pigpens roof🐖, trees🌳, I would wander off the plain fields🌻, I could write a book about all the things I did, all of this just to fulfill my curiosity.
        <br />
        <br/>All of this would of course make a parent's skin crawl 😅.
      </p>
    </div>
  </section>  )
}

export default About