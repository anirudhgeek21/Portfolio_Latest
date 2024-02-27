import React, { useState } from 'react';

const App = () => {
  const moviesData = [
    {
      id: 1,
      name: 'Location Unknown',
      year: 2021,
      duration: '1hr 38min',
      rating: 4.2,
      genres: ['Italian', 'Drama', 'Indie'],
      description: 'Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.',
      cast: [
        'https://i.postimg.cc/jqgkqhSb/cast-11.jpg',
        'https://i.postimg.cc/8P7X7r7r/cast-12.jpg',
        'https://i.postimg.cc/2SvHwRFk/cast-13.jpg',
      ],
      poster: 'https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg',
    },
    {
        id: 1,
        name: 'Location Unknown',
        year: 2021,
        duration: '1hr 38min',
        rating: 4.2,
        genres: ['Italian', 'Drama', 'Indie'],
        description: 'Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.',
        cast: [
          'https://i.postimg.cc/jqgkqhSb/cast-11.jpg',
          'https://i.postimg.cc/8P7X7r7r/cast-12.jpg',
          'https://i.postimg.cc/2SvHwRFk/cast-13.jpg',
        ],
        poster: 'https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg',
      },
      {
        id: 1,
        name: 'Location Unknown',
        year: 2021,
        duration: '1hr 38min',
        rating: 4.2,
        genres: ['Italian', 'Drama', 'Indie'],
        description: 'Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.',
        cast: [
          'https://i.postimg.cc/jqgkqhSb/cast-11.jpg',
          'https://i.postimg.cc/8P7X7r7r/cast-12.jpg',
          'https://i.postimg.cc/2SvHwRFk/cast-13.jpg',
        ],
        poster: 'https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg',
      },
      {
        id: 1,
        name: 'Location Unknown',
        year: 2021,
        duration: '1hr 38min',
        rating: 4.2,
        genres: ['Italian', 'Drama', 'Indie'],
        description: 'Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.',
        cast: [
          'https://i.postimg.cc/jqgkqhSb/cast-11.jpg',
          'https://i.postimg.cc/8P7X7r7r/cast-12.jpg',
          'https://i.postimg.cc/2SvHwRFk/cast-13.jpg',
        ],
        poster: 'https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg',
      },
  ];

  const [hoveredMovie, setHoveredMovie] = useState(null);

  return (
    <div className="bg-black min-h-screen cursor-default flex flex-col items-center justify-center md:mt-0 mt-36">
      <div className="navigation-bar flex justify-between items-center bg-black md:p-6 py-14 ">
        <h2 className="text-white font-inherit tracking-wide">
           <a href="/" className="text-white text-5xl no-underline">
           <h1 className=" md:ml-0 ml-9 md:inline hidden"><strong>VISIT MY OTHER</strong></h1>
             <h1 className="bg-purple-800 w-12/12 text-[#E9F3FF] rounded-xl py-4 text-center ml-0 md:ml-0 md:top-[5.1rem] top-[11.5rem] md:mb-16 md:mt-4 w-full px-4"><strong>PROJECTS</strong></h1>
        
           </a>
        </h2>
        
       </div>

      <div id="movies" className="w-full flex flex-wrap justify-center">
        {moviesData.map((movie) => (
          <div
            key={movie.id}
            className="movie relative border border-gray-800 rounded w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mb-20 md:mb-6 lg:mb-8 md:mx-2 lg:mx-4 mx-4"
            onMouseEnter={() => setHoveredMovie(movie.id)}
            onMouseLeave={() => setHoveredMovie(null)}
          >
            <div className="poster relative overflow-hidden">
              <img src={movie.poster} alt={movie.name} className="w-full h-full object-cover" />
            </div>
            {hoveredMovie === movie.id && (
              <div className="details absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="text-xl font-semibold mb-2">{movie.name}</h3>
                <span className="rating">
                  {[...Array(5)].map((star, index) => (
                    <i key={index} className={`fas fa-star ${index < Math.floor(movie.rating) ? 'text-yellow-400' : 'text-gray-400'}`}></i>
                  ))}
                  <span className="ml-1">{movie.rating}/5</span>
                </span>
                <div className="tags mt-2">
                  {movie.genres.map((genre, index) => (
                    <span key={index} className="tag bg-blue-500 px-2 py-1 rounded-full mr-2">
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="desc text-sm mt-2">{movie.description}</p>
                <div className="cast mt-2">
                  <h3 className="text-sm font-semibold">Cast</h3>
                  <ul className="flex gap-1">
                    {movie.cast.map((castImage, index) => (
                      <li key={index}>
                        <img src={castImage} alt={`Cast ${index + 1}`} className="w-6 h-6 object-cover rounded-full border border-white" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default App;





















































// import React from 'react';

// const App = () => {
//   const moviesData = [
//     
//   ];

//   return (
//     <div className="bg-black min-h-screen cursor-default flex flex-col items-center justify-center md:pb-32 md:pt-24 ">
//       <div className="navigation-bar flex justify-between items-center bg-black p-6">
//         <h2 className="text-white font-mono tracking-wide">
//           <a href="/" className="text-white text-4xl no-underline">
//           <h1 className="mb-4 md:ml-0 ml-9"><strong>VISIT MY OTHER</strong></h1>
//             <h1 className="bg-purple-800 w-12/12 text-[#E9F3FF] rounded-xl py-4 text-center ml-9 md:ml-0 md:top-[5.1rem] top-[11.5rem] md:mb-16"><strong>PROJECTS</strong></h1>
        
//           </a>
//         </h2>
        
//       </div>

//       <div id="movies" className="w-full flex flex-wrap justify-center">
//         {moviesData.map((movie) => (
//           <div key={movie.id} className="movie relative border border-gray-800 rounded w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mb-4 md:mb-6 lg:mb-8 md:mx-2 lg:mx-4">
//             <div className="poster relative overflow-hidden">
//               <img src={movie.poster} alt={movie.name} className="w-full h-full object-cover" />
//             </div>
//             <div className="details absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 md:hover:visible md:invisible">
//               <h3 className="text-xl font-semibold mb-2">{movie.name}</h3>
//               <span className="rating">
//                 {[...Array(5)].map((star, index) => (
//                   <i key={index} className={`fas fa-star ${index < Math.floor(movie.rating) ? 'text-yellow-400' : 'text-gray-400'}`}></i>
//                 ))}
//                 <span className="ml-1">{movie.rating}/5</span>
//               </span>
//               <div className="tags mt-2">
//                 {movie.genres.map((genre, index) => (
//                   <span key={index} className="tag bg-blue-500 px-2 py-1 rounded-full mr-2">
//                     {genre}
//                   </span>
//                 ))}
//               </div>
//               <p className="desc text-sm mt-2">{movie.description}</p>
//               <div className="cast mt-2">
//                 <h3 className="text-sm font-semibold">Cast</h3>
//                 <ul className="flex gap-1">
//                   {movie.cast.map((castImage, index) => (
//                     <li key={index}>
//                       <img src={castImage} alt={`Cast ${index + 1}`} className="w-6 h-6 object-cover rounded-full border border-white" />
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

      
//     </div>
//   );
// };

// export default App;
