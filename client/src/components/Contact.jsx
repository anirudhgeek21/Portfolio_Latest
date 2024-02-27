import React from 'react';
import { Link } from 'react-router-dom';

const ContactComponent = () => {
  return (
    <>
    
    
    
    <div className="mt-[-30%] md:mt-0 bg-fixed w-full h-[1000px] md:h-[1220px] bg-cover m-auto bg-center bg-gradient-to-r from-violet-600 to-purple-600">
      <div className="w-full md:w-6/12 mx-auto mb-12 relative pt-20 md:ml-[29%] px-6">
        <h1 className="w-full md:w-6/12 pt-10 md:pt-32 mb-4 md:mb-9 text-3xl md:text-5xl text-white font-inter">Get in touch !</h1>
        <button className="bg-violet-600 border-white text-white border-solid border-2 text-lg md:text-xl hover:py-2 hover:px-4 duration-500 shadow-lg rounded-2xl px-4 md:px-5 py-2 font-inter">
            <Link to="/about">
            <strong>About Me</strong>
          </Link>
        </button>
        <img className="absolute w-[13rem] md:w-80 top-[5.5rem] md:top-[6.9rem] left-[42%]  md:left-[20.8rem]" src="https://static.wixstatic.com/media/b313a9_24e7e303ef0a483db82a780349e01dc2~mv2.png/v1/fill/w_424,h_392,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1987145684_edited.png" alt="" />
      </div>

      <div className="w-[90%] md:w-5/12 my-auto mx-auto rounded-2xl h-auto md:h-[690px] bg-white p-4 md:p-10">
        <h1 className="text-2xl md:text-4xl p-2 md:p-5 pb-0 font-inter">Contact me !</h1>
        <p className="p-2 md:p-5 text-slate-500 text-md md:text-lg pt-2 md:pt-4 font-inter">Please fill up the required details and leave a message about how I can help you.</p>
        <div className="flex flex-col md:flex-row mt-2 md:mt-4 ml-0">
          <div className="pl-2 md:pl-5 text-slate-500 text-sm">
            <h1 className="text-md font-inter">
              First Name*
            </h1>
            <input className="p-2 md:p-3 mt-2 md:mt-4 h-10 w-full md:w-56 border-solid border-2 border-slate-500 rounded-lg" type="text" />
          </div>

          <div className="pl-2 md:pl-5 text-slate-500 text-sm mt-2 md:mt-0 ml-0 md:ml-1">
            <h1 className="text-md font-inter">
              Last Name*
            </h1>
            <input className="p-2 md:p-3 mt-2 md:mt-4 h-10 w-full md:w-56 border-solid border-2 border-slate-500 rounded-lg" type="text" />
          </div>
        </div>

        <div className="text-slate-500 text-sm pl-2 md:pl-5 mt-2 md:mt-6">
          <h1 className="text-md font-inter">
            Email*
          </h1>
          <input className="p-2 md:p-3 mt-2 md:mt-4 h-10 w-full md:w-[96%] border-solid border-2 border-slate-500 rounded-lg" type="text" />
        </div>

        <div className="text-slate-500 text-sm pl-2 md:pl-5 mt-2 md:mt-6">
          <h1 className="text-md font-inter">
            How may I help you ?
          </h1>
          <textarea className="p-2 md:p-3 mt-2 md:mt-4 h-28 w-full md:w-[96%] border-solid border-2 border-slate-500 rounded-lg" name="" id="" cols="30" rows="10"></textarea>
        </div>

        <div className="w-[90%] mt-2 md:mt-0 mx-auto md:mx-0">
          <button className="bg-blue-950 hover:bg-purple-700 duration-300 tracking-wide p-2 md:p-5 w-full md:w-[100%] md:ml-[1.67rem] text-white mt-2 md:mt-7 rounded-lg font-inter mx-auto">
            <strong>Submit</strong>
          </button>
        </div>
      </div>
    </div>








    {/* Anonymous */}



    <div className="mt-[-30%] md:mt-0 bg-fixed w-full h-[670px] md:h-[1000px] bg-cover m-auto bg-center bg-gradient-to-r from-violet-600 to-purple-600">
      <div className="w-full md:w-6/12 mx-auto mb-12 relative md:pt-0 pt-20 md:ml-[29%] px-6">
        <h1 className="w-full md:w-6/12 pt-10 md:pt-32 mb-4 md:mb-9 text-3xl md:text-5xl text-white font-inter text-center mx-auto md:ml-28">Send Me Anonymous Message</h1>
        
      </div>

      <div className="w-[90%] md:w-4/12 my-auto mx-auto rounded-2xl h-auto md:h-[390px] bg-white p-4 md:p-10">
        
        <div className="text-slate-500 text-sm pl-2 md:pl-5 mt-2 md:mt-6">
          <h1 className="text-md font-inter text-center">
            Show me your creativity ?
          </h1>
          <textarea className="p-2 md:p-3 mt-2 md:mt-4 h-28 w-full md:w-[96%] border-solid border-2 border-slate-500 rounded-lg" name="" id="" cols="30" rows="10"></textarea>
        </div>

        <div className="w-[90%] mt-2 md:mt-0 mx-auto md:mx-0">
          <button className="bg-blue-950 hover:bg-purple-700 duration-300 tracking-wide p-2 md:p-5 w-full md:w-[100%] md:ml-[1.67rem] text-white mt-2 md:mt-7 rounded-lg font-inter mx-auto">
            <strong>Submit</strong>
          </button>
        </div>
      </div>



      
    </div>




    
    
    
    
    </>
  );
};

export default ContactComponent;
