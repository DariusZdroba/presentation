import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import "./CSS/style.css"
import Infosection from './Infosection';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Development from './Development';
import Hobbies from './Hobbies';
import NotFound from './NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router basename={process.env.PUBLIC_URL}> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Infosection />} />
      <Route path="/about/personal" element={<About />} />
      <Route path="/about/development" element={<Development />} />
      <Route path="/about/hobbies" element={<Hobbies />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </Router>
  </React.StrictMode>
);
