import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Service from './components/Service';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './About_route';
import Footer from './components/Footer'

function Services() {
  return (
    <div className="App">
      
      <Navbar  bg2 = "white"/>
        <Routes>
        <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Service />
        <Footer />
        <div className="copyright fixed bottom-0 bg-black text-white text-center w-full py-1 font-mono">
        <p>&copy; <strong>2023 All rights reserved</strong></p>
      </div>
      
    </div>
  );
}

export default Services;
