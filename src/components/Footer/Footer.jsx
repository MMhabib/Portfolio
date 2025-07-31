import React from "react";
import { FaFacebook, FaLinkedin,  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">M.M Habib</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>
{/* <a href="https://github.com/MMhabib"><FaGithub  className="h-8 w-8  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"/></a>
            <a href="https://www.linkedin.com/in/mmhabib/"><FaLinkedin   className="h-8 w-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  "/></a>
            <a href="https://www.facebook.com/habibczs/"><FaFacebook  className="h-8 w-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"/></a> */}
        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/habibczs/" },
            
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mmhabib/" },
            { icon: <FaGithub />, link: "https://github.com/MMhabib" },
            
            
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl  hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 M.M Habib. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
