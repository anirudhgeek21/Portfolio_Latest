import React from 'react';
import handshakeImage from './handshake.png';

const MyComponent = () => {
  return (
    <div className="text-center md:m-auto md:mt-8 z-50 mt-[-14%]">
      <h1 className="text-5xl md:text-5xl lg:text-7xl md:mt-44 md:p-0 p-[3%]">
        <strong>
          CODE THAT,{' '}
          <span className="block md:inline bg-purple-800 z-50 p-2 md:p-4 lg:p-6 text-[#E9F3FF] rounded-2xl mt-5 md:mt-10 " style={{ fontFamily: 'Inter, sans-serif' }}>
            FEELS LIKE HOME
          </span>
        </strong>
      </h1>
      <img
        className="mt-[-20%] md:mt-8 w-36 md:w-48 lg:w-64 mx-auto md:absolute md:top-56 md:w-72 md:right-72 -z-50 animate-spin animate-spin-slow md:visible invisible"
        src="https://static.wixstatic.com/media/3d4fa2c4517b13e27346085b124ee8cf.png/v1/fill/w_150,h_148,al_c,lg_1,q_85,enc_auto/Polygon%206.png"
        alt=""
      />
      <img className="mt-16 md:mt-48 w-full md:w-auto mx-auto object-cover" src={handshakeImage} alt="" />
    </div>
  );
};

export default MyComponent;
