import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './Navbar';
import Services from './Service';
import Banner from './Landing_banner/Banner';
import Aniflix from './Projects/Aniflix/Aniflix';
import Airbnb from './Projects/Airbnb/Airbnb';
import GetInTouch from './GetInTouch';
import Contact from './Contact';
import About from '../About_route';
import Guess from './Projects/Guess_Number/Guess';
import MoreProjects from './Projects/More/MoreProjects';
import More_slide from './Projects/More/More_slide';
import Footer from './Footer';
import More_Mobile from './Projects/More_copy/More_mobile_only';
import Project_Mobile from './Projects/More_copy/Projects_Mobileonly';

function Home() {
  return (
    <div className="App">
      
      <Navbar  bg2 = "white"/>
        <Routes>
            
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Banner />
        <div className='hidden lg:inline'>
            <Aniflix />
            <Airbnb />
            <Guess />
        </div>
        <div className='md:inline hidden'>
            <More_slide />
        </div>
        <div className='inline md:hidden'>
            <Project_Mobile />
        </div>
        <div className='inline md:hidden'>
            <More_Mobile />
        </div>
        <GetInTouch />
        <Footer />
        <div className="copyright fixed bottom-0 bg-black text-white text-center w-full py-1 font-mono">
        <p>&copy; <strong>2023 All rights reserved</strong></p>
      </div>



       
    </div>
  );
}

export default Home;
