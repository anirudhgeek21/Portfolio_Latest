import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <footer className="bg-[rgb(23,37,70)] text-white py-8 pb-14">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-xl mb-2">&copy;<strong>Anirudh Prajapati</strong></p>
        <div className="flex mt-4 space-x-4">
        <div className="mb-4 md:mb-0">
          <Link to="/" style={{ color: 'white' }} onClick={toggleMenu}>
            <h1 className="text-md">HOME</h1>
          </Link>
        </div>
        <div className="mb-4 md:mb-0">
          <Link to="/services" style={{ color: 'white' }} onClick={toggleMenu}>
            <h1 className="text-md" style={{ textDecoration: 'none' }}>SERVICES</h1>
          </Link>
        </div>
        <div className="mb-4 md:mb-0">
          <Link to="/about" style={{ color: 'white' }} onClick={toggleMenu}>
            <h1 className="text-md">ABOUT</h1>
          </Link>
        </div>
        <div>
          <Link to="/contact" style={{ color: 'white' }} onClick={toggleMenu}>
            <h1 className="text-md pb-5 md:pb-0" style={{ textDecoration: 'none' }}>CONTACT</h1>
          </Link>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
