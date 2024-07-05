import React from 'react';
import { SocialIcon } from 'react-social-icons'; // Import the SocialIcon component if you are using it

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 mt-1 bg-neutral text-neutral-content">
        <div className="footer-container p-2 mx-auto text-center md:text-left md:ml-20">
          <h1 className="text-lg">📧 habib.se56@gmail.com</h1>
          <br />
          <h2 className="text-lg">📞 +880 10709004842 </h2>
          <br />
          <h2 className="text-lg">🏠 Cumilla 3500, BD</h2>
        </div>

        <nav className="justify-self-center md:justify-self-end 2xl:mr-72">
          <h6 className="footer-title m-6 text-center md:text-left">Social</h6>
          <div className="grid grid-flow-col gap-4 justify-center md:justify-start">
            <SocialIcon url="https://www.facebook.com/habibczs" />
            <SocialIcon url="https://x.com/1051Habib" />
            <SocialIcon url="https://github.com/MMhabib" />
            <SocialIcon url="https://www.linkedin.com/in/mmhabib/" />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
