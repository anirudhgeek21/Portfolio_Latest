import React from 'react';
import movieBg from './movie-bg.png';
import movieLogo from './movie-inner.png';
import movieInner from './moviein.png';

const MovieComponent = () => {
  return (
    <div className="h-[1000px] bg-black w-full m-auto md:bg-cover bg-cover bg-fixed bg-center mt-16 md:mt-32 pt-2" style={{ backgroundImage: `url(${movieBg})` }}>
      <div className="bg-white rounded-xl w-11/12 md:w-8/12 xl:w-7/12 m-auto px-4 md:px-10 py-3 h-[600px] relative mt-44 md:my-44">
        <div className="h-[550px] mt-4">
          <div className="flex w-full md:w-6/12 justify-around text-left">
            <img className="w-28 ring-4 ring-blue-200 h-28 mt-10 ml-2 rounded-xl" src={movieLogo} alt="" />
            <div>
              <h1 className="m-auto mt-16 text-3xl"><strong>ANIFLIX</strong></h1>
              <h1 className="mt-1 text-md text-slate-600">A movie catalogue site</h1>
            </div>
          </div>

          <div className="w-full md:w-7/12 mt-8 ml-0 md:ml-9 text-slate-500 px-2 md:p-0">
            <h1>
              I have made a movie streaming and catalog using HTML, CSS, Javascript, and The Movie Database API.
              <br />
              <br />
              Some of the features of the application:<br />
              1. Movie catalog containing their names and ratings using API.<br />
              2. Search bar to search for movies containing the typed keyword.<br />
              3. When hovering over the movie card, an overview tab pops up containing the description of the movie.<br />
            </h1>
          </div>

          <div className="flex w-full md:w-7/12 justify-around mt-6 md:mt-12 ml-0 md:ml-8">
            <div className="bg-purple-800 text-white px-7 py-3 rounded-full shadow-xl hover:bg-white hover:text-purple-800 duration-700 hover:shadow-black hover:shadow-md">
              <h1><strong><a href="https://anirudhgeek21.github.io/Anirudh-Flix/">View Project</a></strong></h1>
            </div>

            <div className="bg-black text-white px-7 py-3 rounded-full shadow-xl hover:bg-white hover:text-black duration-700 hover:shadow-black hover:shadow-md">
              <h1><strong><a href="https://github.com/anirudhgeek21/Anirudh-Flix">Github Link</a></strong></h1>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/12 absolute top-20 right-[4.5rem]">
          <img className="h-[400px] rounded-xl shadow-2xl invisible lg:visible" src={movieInner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
