
import React from 'react'
import './styles.css';
import './SponsorsStyles.css'
import SponsorCard from './SponsorCard';
import PastSposorsCard from './PastSposorsCard';
import SpecialLogos from './SpecialLogos';
import python from './python.png';
import c from './c-.png';
import react from './science.png';
import native from './atomic.png';
import html_pic from './html-5.png';
import css from './css-3.png';
import js_pic from './js.png';
import node_pic from './node-js.png';
import sql from './mysql.png';


function Sponsors() {

  const pastSponsorsRows12 = [
    {
      sponsor: "React",
      logoSource: react
    },
    {
      sponsor: "HTML",
      logoSource: html_pic
    },
    {
      sponsor: "React Native",
      logoSource: native
    },
    {
      sponsor: "Node",
      logoSource: node_pic
    },
    {
      sponsor: "Express",
      logoSource: js_pic
    },
    {
      sponsor: "Python",
      
      logoSource: python
    },
    {
      sponsor: "Tailwind",
      logoSource: css
    },
    {
      sponsor: "Javascript",
      logoSource: js_pic
    },
    {
      sponsor: "CSS",
      logoSource: css
    },
    {
      sponsor: "My SQL",
      logoSource: sql
    },
    {
      sponsor: "C++",
      logoSource: c
    },
    {
      sponsor: "Bootstrap",
      logoSource: css
    },
  ]



  

  
  return (

    <div className='overflow-hidden overflow-x-hidden pb-24 mt-[-60%] md:mt-[-10%] bg-black' id='sponsors'>

    

      <div className='pt-32'>

        <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8
        items-center ml-[15%] sm:ml-[20%] md:ml-[18%] lg:ml-8'>

          {pastSponsorsRows12.map((item, index) => (
            (index < 6) ? (
              <div key={index} className='float-from-left logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            ) : (
              <div key={index} className='float-from-right logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            )
          ))}
<h2 className='bg-violet-700 text-white headerAkira w-fit ml-6 md:ml-[40%] md:my-3 lg:my-1 lg:ml-[30%]
          xl:ml-[35%] rounded-xl lg:mx-36 text-center px-5 md:px-5 lg:px-8 font-bold font py-6
           text-md md:text-2xl items-center col-span-2 md:col-span-2 z-10 lg:absolute
           '>
            ALL SKILLS I HAVE
          </h2>
          
{pastSponsorsRows12.map((item, index) => (
            (index < 6) ? (
              <div key={index} className='float-from-left logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            ) : (
              <div key={index} className='float-from-right logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            )
          ))}

          

        </div>

      </div>

    </div>
  )
}

export default Sponsors