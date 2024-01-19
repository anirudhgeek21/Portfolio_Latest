// SocialMediaBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaBar = () => {
  return (
    <div className="bg-black p-4  flex w-[30%] justify-around">
      <div className="flex justify-around w-[80%] space-x-4 md:mt-[-70%] md:ml-[6rem] mt-[-300%] ml-[105%]">
        <a href="https://www.linkedin.com/in/anirudh-prajapati/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-4xl" />
        </a>
        <a href="https://github.com/anirudhgeek21" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-white text-4xl" />
        </a>
        <a href="https://www.instagram.com/anirudh.ppt/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-white text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaBar;
