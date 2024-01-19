import React, { useState } from 'react';


const SpinnerComponent = () => {
  const [ang, setAng] = useState(0);

  const handlePrevClick = () => {
    setAng((prevAng) => prevAng + 22.5);
    document.documentElement.style.setProperty('--ang', `${ang + 22.5}deg`);
  };

  const handleNextClick = () => {
    setAng((prevAng) => prevAng - 22.5);
    document.documentElement.style.setProperty('--ang', `${ang - 22.5}deg`);
  };

  return (
    <>



<style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

          * {
            --ang: 0;
          }


          .spinner {
            transform-style: preserve-3d;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: rotateY(calc(var(--ang) * 1deg)) translateY(-12px);
            transition: all .5s ease-in-out;
          }

          .holder {
            width: 100vh;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 700px;
            perspective-origin: center;
            margin : auto auto;
            margin-top: 10%;
          }

          .panel {
            border-radius: 5px;
            width: 100px;
            height: 100px;
            position: absolute;
            background-size: cover;
            background-position: 50% 50%;	
          }

          ${[...Array(16).keys()].map((i) => `
            .panel:nth-child(${i + 1}) {
              transform: rotateY(${i * 22.5}deg) translateZ(400px);
            }
          `).join('\n')}

          .pagination {
            width: 600px;
            height: 44px;
            margin-top: 10px;
            text-align: center;
            margin: auto auto;
          }

          .pagination button {
            padding: 0;
            border: none;
            cursor: pointer;
            width: 44px;
            color: black;
            background: white;
            height: 44px;
            margin: 0 10px;
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            border-radius: 100%;
            transition: all .2s ease-in-out;
            
          }

          .pagination button:hover {
            background: #fffc;
          }

          .pagination button:active {
            background: #ffff;
          }

          @keyframes spin {
            0% {
              transform: rotateY(0deg);
            }
            50% {
              
            }
            100% {
              transform: rotateY(360deg);
            }
          }

          .fade {
            background: #0006;
            background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%);
            width: 860px;
            height: 300px;
            position: absolute;
            transform: rotateY(calc(var(--ang) * -1deg)) translateZ(110px);
            transition: all .5s ease-in-out;
          }

          .a {
            background-image: url(https://images.unsplash.com/photo-1516727003284-a96541e51e9c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjczNzB8&ixlib=rb-4.0.3&q=85);
          }

          .b {
            background-image: url(https://images.unsplash.com/photo-1691389694412-266f872999c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjY5NTh8&ixlib=rb-4.0.3&q=85);
          }

          .c {
            background-image: url(https://images.unsplash.com/photo-1606391901318-07003db08d63?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjY5OTJ8&ixlib=rb-4.0.3&q=85);
          }

          .d {
            background-image: url(https://images.unsplash.com/photo-1610785396756-24bd1889ddae?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjcwMjl8&ixlib=rb-4.0.3&q=85);
          }

          .e {
            background-image: url(https://images.unsplash.com/photo-1505849871170-7f94cf84f4d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjcwODJ8&ixlib=rb-4.0.3&q=85);
          }

          .f {
            background-image: url(https://images.unsplash.com/photo-1518087456308-c3976320f908?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjcxMTB8&ixlib=rb-4.0.3&q=85);
          }

          .g {
            background-image: url(https://images.unsplash.com/photo-1558724040-9de64afade55?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjcxNDV8&ixlib=rb-4.0.3&q=85);
          }

          .h {
            background-image: url(https://images.unsplash.com/photo-1604877098440-b7b440241686?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjcxOTR8&ixlib=rb-4.0.3&q=85);
          }

          .i {
            background-image: url(https://images.unsplash.com/photo-1518573484273-eb277fe4b036?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjcyMTl8&ixlib=rb-4.0.3&q=85);
          }

          .j {
            background-image: url(https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjcyMzZ8&ixlib=rb-4.0.3&q=85);
          }

          .k {
            background-image: url(https://images.unsplash.com/photo-1546877625-cb8c71916608?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjcyNTl8&ixlib=rb-4.0.3&q=85);
          }

          .l {
            background-image: url(https://images.unsplash.com/photo-1551727974-8af20a3322f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjcyNzR8&ixlib=rb-4.0.3&q=85);
          }

          .m {
            background-image: url(https://images.unsplash.com/photo-1436759644647-e274ee931eaa?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5OTU1Mjl8&ixlib=rb-4.0.3&q=85);
          }

          .n {
            background-image: url(https://images.unsplash.com/photo-1533779671378-06561cdaacb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjczMDd8&ixlib=rb-4.0.3&q=85);
          }

          .o {
            background-image: url(https://images.unsplash.com/photo-1544377570-a774bea2355c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjczMzN8&ixlib=rb-4.0.3&q=85);
          }

          .p {
            background-image: url(https://images.unsplash.com/photo-1586693231040-e89840e7d805?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM5MjczNDV8&ixlib=rb-4.0.3&q=85);
          }
        `}
      </style>

















      <div className="holder">
        <div className="spinner">
          {[...Array(16).keys()].map((index) => (
            <div key={index} className={`panel ${String.fromCharCode(97 + index)}`}></div>
          ))}
          <div className="fade"></div>
        </div>
      </div>
      <div className="pagination">
        <button type="button" id="prev" onClick={handlePrevClick}>&#8592;</button>
        <button type="button" id="next" onClick={handleNextClick}>&#8594;</button>
      </div>
    </>
  );
};

export default SpinnerComponent;
