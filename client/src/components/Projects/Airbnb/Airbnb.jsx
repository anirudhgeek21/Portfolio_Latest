import React from 'react';
import movieBg from './airbnb_bg.png';
import movieInner from './airin.png';
import Logo from './airbnb_logo.jpeg'

const MovieComponent = () => {
  return (
    <div className="h-[1000px] bg-black w-full m-auto md:bg-cover bg-cover bg-fixed bg-center  pt-2" style={{ backgroundImage: `url(${movieBg})` }}>
      <div className="bg-white rounded-xl w-11/12 md:w-8/12 xl:w-7/12 m-auto px-4 md:px-10 py-3 h-[600px] relative mt-44 md:my-44">
        <div className="h-[550px] mt-4">
          <div className="flex w-full md:w-6/12 justify-around text-left">
            <img className="w-28 ring-4 ring-blue-200 h-28 mt-10 ml-2 rounded-xl" src={Logo} alt="" />
            <div>
              <h1 className="m-auto mt-16 text-3xl"><strong>Airbnb Clone</strong></h1>
            
            </div>
          </div>

          <div className="w-full md:w-7/12 mt-8 ml-0 md:ml-9 text-slate-500 px-2 md:p-0">
            <h1>
            I made a clone for the Airbnb website using html , css , bootstrap5 , and javascript keeping in mind the responsiveness.
              <br />
              <br />
              Some of the features of the application:<br />
              1. Made the website responsive with the help of grid layout using bootstrap.<br />
              2. Made some functionalities like the profile button and search option in the navigation bar using js.<br />
            </h1>
          </div>

          <div className="flex w-full md:w-7/12 justify-around mt-6 md:mt-12 ml-0 md:ml-8">
            <div className="bg-purple-800 text-white px-7 py-3 rounded-full shadow-xl hover:bg-white hover:text-purple-800 duration-700 hover:shadow-black hover:shadow-md">
              <h1><strong><a href="https://anirudhgeek21.github.io/Airbnb-clone/">View Project</a></strong></h1>
            </div>

            <div className="bg-black text-white px-7 py-3 rounded-full shadow-xl hover:bg-white hover:text-black duration-700 hover:shadow-black hover:shadow-md">
              <h1><strong><a href="https://github.com/anirudhgeek21/Airbnb-clone">Github Link</a></strong></h1>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/12 absolute top-20 right-[4.5rem]">
          <img className="h-[400px] rounded-xl shadow-2xl invisible lg:visible object-cover" src={movieInner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
