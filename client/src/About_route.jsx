import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Service from './components/Service';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About_in from './components/About-in/About_in.jsx';
import About_new from './components/About-in/About_new';
import About_text from './components/About-in/About_text';

function About_route() {
  return (
    <div className="App">
      
      <Navbar homeColor="white"
  servicesColor="white"
  aboutColor="white"
  contactColor="white"
  bg2 = "black"
  navbarBackgroundColor="black" />
        <Routes>
        <Route path="/home" element={<Home />} /> 
        
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About_new />
        <Footer />
        <div className="copyright fixed bottom-0 bg-black text-white text-center w-full py-1 font-mono">
        <p>&copy; <strong>2023 All rights reserved</strong></p>
      </div>
      
    </div>
  );
}

export default About_route;
