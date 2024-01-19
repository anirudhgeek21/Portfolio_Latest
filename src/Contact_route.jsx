import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Service from './components/Service';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './About_route'

function Contact_route() {
  return (
    <div className="App">
      
      <Navbar homeColor="white"
  servicesColor="white"
  aboutColor="white"
  contactColor="white"
  bg2 = "black"
  navbarBackgroundColor="#9333EA" />
        <Routes>
        <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Contact />
        <Footer />
        <div className="copyright fixed bottom-0 bg-black text-white text-center w-full py-1 font-mono">
        <p>&copy; <strong>2023 All rights reserved</strong></p>
      </div>
      
    </div>
  );
}

export default Contact_route;
