import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Services from './Services';
import Banner from './components/Landing_banner/Banner';
import Aniflix from './components/Projects/Aniflix/Aniflix';
import Airbnb from './components/Projects/Airbnb/Airbnb';
import GetInTouch from './components/GetInTouch';
import Contact_route from './Contact_route';
import Home from './components/Home';
import About from './About_route'

function App() {
  return (
    <div className="App">
      
        
        <Routes>
          
          <Route path="*" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact_route />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      
    </div>
  );
}

export default App;
