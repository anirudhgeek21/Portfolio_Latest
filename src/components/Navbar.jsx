import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { homeColor, servicesColor, aboutColor, contactColor, navbarBackgroundColor,bg2 } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  return (
    <div className={`flex flex-col md:flex-row items-center justify-center mx-auto mt-[-5%] md:mt-[0rem] md:w-[100vw] w-80%`} style={{ backgroundColor: navbarBackgroundColor }}>
      <div className="font-semibold w-full md:w-[30%] py-3 md:px-5 px-0 md:m-12 mt-11 md:mx-10 text-center bg-slate-50 rounded-md shadow-lg shadow-violet-200 z-50 mx-auto md:ml-[5.2rem] lg:ml-32">
        <h1 className="text-center lg:text-[190%] text-5xl md:text-[130%] w-full " style={{ fontFamily: 'Inter, sans-serif' }}>
          <strong>ANIRUDH <span className={`text-purple-800 md:ml-4`}>PRAJAPATI</span></strong>
        </h1>
      </div>

      {/* Responsive Hamburger Menu */}
      <div className="">
        <button className="text-purple-800" onClick={toggleMenu}>
          <svg
            className="w-8 h-8 mt-12  md:mt-[3.5rem] md:mr-6 z-50 absolute top-0 right-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div className={`w-full md:w-[44%] text-center md:m-auto md:flex justify-around bg-${bg2} md:bg-inherit ${menuOpen ? 'visible' : 'invisible'} lg:text-[110%] z-[999] m-auto mt-[-6%]`}>
        <div className="mb-4 md:mb-0">
          <Link to="/" style={{ color: homeColor }} onClick={toggleMenu}>
            <h1 className="hover:text-purple-800 pt-5 md:pt-0"><strong>HOME</strong></h1>
          </Link>
        </div>
        <div className="mb-4 md:mb-0">
          <Link to="/services" style={{ color: servicesColor }} onClick={toggleMenu}>
            <h1 className="hover:text-purple-800" style={{ textDecoration: 'none' }}><strong>SERVICES</strong></h1>
          </Link>
        </div>
        <div className="mb-4 md:mb-0">
          <Link to="/about" style={{ color: aboutColor }} onClick={toggleMenu}>
            <h1 className="hover:text-purple-800"><strong>ABOUT</strong></h1>
          </Link>
        </div>
        <div>
          <Link to="/contact" style={{ color: contactColor }} onClick={toggleMenu}>
            <h1 className="hover:text-purple-800 pb-5 md:pb-0" style={{ textDecoration: 'none' }}><strong>CONTACT ME</strong></h1>
          </Link>
        </div>
      </div>

      <img
        className="absolute top-[-4%] w-52 left-24 md:top-0 md:w-40 md:left-56 lg:w-48 lg:left-64 xl:w-52 xl:left-72 animate-spin animate-spin-slow md:animate-none"
        src="https://static.wixstatic.com/media/3d4fa2c4517b13e27346085b124ee8cf.png/v1/fill/w_300,h_296,al_c,lg_1,q_85,enc_auto/Polygon%206.png"
        alt=""
      />
    </div>
  );
};

export default Navbar;
