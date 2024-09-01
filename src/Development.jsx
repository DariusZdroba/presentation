import React from 'react';
import computer from "./images/pc.jpeg";
import './CSS/style.css';

const Development = () => {
  return (
    <section className="info-section2">
      <div className="container">
        <h1 className='section-header'>
            Career (work in progress)
        </h1>
        <p className="section-paragraph">
          To keep it short, I am about to finish my first Software Engineering intern role <b>@Snyk</b>, and I'm on my last year of masters 🎓 at the Faculty of Mathematics and Informatics from UBB Cluj-Napoca.
        </p>
        <br />
        <br />
        <span className='h2'>⚠️</span>
        <p className='text-danger h2'><b>Warning, I am about to ramble on why I'm into tech</b></p>
        <span className='h2'>⚠️</span>
        <br /> <br />

        <p className="section-paragraph">
          I feel like every <b>passion</b> starts from some kind of <b>spark✨</b>, anyone should have something about themselves that they do, that makes them love their passion.
          <br />
          <br />
          <b>For me</b>, it started from a realy early age👶🏼, I got my first computer in <b>2004-2005</b>, when I was <b>3-4 years old</b> 🖥️, along with some old-school games I have played such as <b>Hercules, Age of Empires, Prehistorik</b> and others I can't recall, I also started exploring, I had a Windows 98 machine and I started looking into all <b>directories and files</b> 📁📁, to see what's happening there, how it's working 🤯.
          <br />
          <br />
          My curious nature couldn't grasp how it worked, I would always disassemble my toys🔫 just to see what's inside and how they work 🔩.
          <br />
          <br />
        </p>

        <div className="text-and-image-container2">
          <p className="section-paragraph">
            This <b>curiosity</b> was fulfilled when <b>I was 13</b> 🤩, I got to make my first computer from <b>scratch</b> 👨🏽‍💻. I was (still am) into video games 🎮, and I was dreaming for years to build my own PC (mainly to play games). <b>My parents</b> were understandably <b>skeptical</b> on giving a 10-13 year old such amount of <b>money</b> 🤑 and letting <b>him build</b> his own computer, but I eventually <b>got to them </b>🙊.
          </p>
          <img src={computer} alt="Picture of the computer I built" className="img-fluid rounded border border-primary custom-img"/>
        </div>

        <br />
        <p className="section-paragraph">
          This picture above is an actual picture of the <b>PC</b> while I was building it, my hands were clearly shaking, I knew if I wouldn't make it work, I'd be dead ☠️.
        </p>

        <p className='section-paragraph'>
        I went on to pursue an informatics domain high school 🏫 where I've written my first lines of code 💻, in <b>Pascal</b>  (yes Pascal) 🧮, and things just picked up from there 🚀. I was fascinated by the idea of being able to build anything you can imagine ✨
        </p>
      </div>
    </section>
  );
};

export default Development;
