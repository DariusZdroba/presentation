import React from 'react';
import burger from "./images/burger.jpeg";
import travel from "./images/travel.jpeg";
import travel2 from "./images/travel2.jpeg";

const Hobbies = () => {
  return (
    <section className="info-section">
      <div className="container">
        <h1 className='section-header'>
          Work in progress to split hobbies into different posts
        </h1>
        <br />
        <br />
        <h2>For now they are all cluttered up here..</h2>

        <div className="text-and-images">
          <div className="text-content">
            <p className='section-paragraph'>
              <br />
              <br />

              Beside tech, I enjoy sports, such as football, weight lifting, running.
              <br />
              <br />
              I also do some cooking and travelling, the passion for food and travelling combined is the best.
              <br />
              <br />
              
              I like to eat in new places, I am interested in different cuisines I haven't encountered on a regular
              basis such as many Asian cuisines (Indian, Thai, Malaysian, Japanese, Korean, Vietnamese... you get the point). 
              <br />
              <br />
              <br />

              As well as classics such as Italian. 
              <br />
              As for the cooking, I mainly like to make juicy homemade burgers 
              (homemade bun and everything).
            </p>
            <br />
            <br />
            <br />

            <p className='section-paragraph'>
              I like travelling to places that bring history into the experience. I haven't been to many places outside the country, but I am planning to.
              <br />
              <br />
              <br />
              <br />

              My last trip was to Brasov, even though it is one of the most visited cities here in Romania, it was my first time there,
              the views are amazing, there's good food, and a lot of history, so definetly recommend it!
            </p>
          </div>

          <div className="images-content">
            <img src={burger} alt="Homemade burger" className='img-fluid rounded border border-primary custom-img'/>
            <img src={travel} alt="Image from Sibiu" className='img-fluid rounded border border-primary custom-img'/>
            <img src={travel2} alt="Image from Sibiu" className='img-fluid rounded border border-primary custom-img'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies;
