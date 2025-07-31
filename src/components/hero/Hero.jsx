import { useRef } from "react";
import "./style.css";
import { skillsData } from "../../constants";
import profile from "../../assets/habib.png";
import githublogo from '../../assets/tech_logo/github.png'
import logo from "../../assets/logo.png";
import { TypewriterEffectSmooth } from "../TypewriterEffectSmooth";
import { FaFacebook, FaGithub, FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const Hero = () => {
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("max-md:w-0");
      menuRef.current.classList.add("max-md:w-full");
    }
    document.body.classList.add("overflow-hidden");
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("max-md:w-full");
      menuRef.current.classList.add("max-md:w-0");
    }
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <section
        id="about"
        className="flex flex-col items-center bg-gradient-to-b from-black to-[#1A0033] text-white pb-16 text-sm"
      >
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridPatternBg.svg"
          alt="hero-bg"
          className="absolute bottom-0 left-0 w-full pointer-events-none"
        />
        <nav className=" fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-2 md:px-8 lg:px-24 xl:px-32 md:py-4 w-full bg-black/70 backdrop-blur-md shadow-md">
          <a href="#">
            <img
              className="h-8 max-lg:w-34 max-lg:h-7 drop-shadow-sm drop-shadow-blue-600"
              src={logo}
              alt=""
              width="157"
            />
          </a>
          <div
            ref={menuRef}
            className="flex items-center md:gap-6 lg:gap-8 xl:gap-12  font-medium text-base max-md:text-base md:max-lg:text-sm
             max-md:fixed max-md:top-0 max-md:left-0 max-md:w-0 max-md:h-screen max-md:bg-black/80 max-md:backdrop-blur max-md:transition-all max-md:duration-300 max-md:overflow-auto max-md:flex-col max-md:space-y-6  max-md:justify-center max-md:items-center z-50"
          >
            <a href="#about" className="hover:text-gray-300 ">
              About
            </a>
            <a href="#skills" className="hover:text-gray-300">
              Skills
            </a>

            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
            <a href="#experience" className="hover:text-gray-300">
              Experience
            </a>
            <a href="#education" className="hover:text-gray-300">
              Education
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
            
            <button
              onClick={closeMenu}
              className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className=" flex space-x-2 xl:space-x-4 max-lg:hidden text-white  font-medium drop-shadow-lg drop-shadow-blue-700 ">
            <a href="https://github.com/MMhabib"><FaGithub  className="h-8 w-8  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"/></a>
            <a href="https://www.linkedin.com/in/mmhabib/"><FaLinkedin   className="h-8 w-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  "/></a>
            <a href="https://www.facebook.com/habibczs/"><FaFacebook  className="h-8 w-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"/></a>
          </div>
          <button
            onClick={openMenu}
            className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </nav>

        <main className="flex flex-col  lg:flex-row items-center max-md:text-center justify-between px-4 md:px-10 lg:px-12 xl:px-32 pt-28 md:pt-36 w-full">
          <div className="flex flex-col items-center max-w-4xl  lg:items-start ">
           <h1 className="font-semibold max-w-full leading-tight ">
  <TypewriterEffectSmooth
    words={[
      {
        text: "Hi, I am M.M. Habib.",
       
        className: "text-4xl md:text-5xl lg:text-6xl text-blue-700",
      },
    
    ]}
  />
  <TypewriterEffectSmooth
    words={[
      
      {
        
        cursorClassName:'h-2',
        text: " A Full-Stack Developer from Cumilla, Bangladesh. I specialize in building responsive web interfaces using React.js, Next.js, and Tailwind CSS. I’ve completed a software development internship and worked on projects like a car rental app and an admin dashboard. I enjoy solving problems, writing clean code, and learning new technologies.",
        className: "text-base md:text-base lg:text-xl text-gray-500 leading-relaxed",
      },
    ]}
  />
</h1>



            <div className="flex flex-col md:flex-row items-center mt-4 gap-3">
              <button
                className="bg-indigo-600 text-white text-base px-6 pr-2.5 py-2.5 rounded-full  font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
                type="button"
              >
                <span>Resume</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <a
                href="#contact"
                className="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-base font-medium hover:bg-indigo-200 transition"
              >
                {`Let's Connect`}
              </a>
            </div>
          </div>
          <div  className=" pb-6 flex justify-center items-center   ">
            <img
              alt="A professional woman working on a laptop"
              className="h-96 max-w-96 w-fit rounded-b-2xl hover:scale-105 transition duration-300 object-cover flex-shrink-0  "
              src={profile}
            />
          </div>
        </main>

        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-16">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#1A0033] to-transparent"></div>

          <div className="overflow-hidden w-full">
            <div className="marquee-inner flex w-max whitespace-nowrap animate-marquee">
              {[...skillsData, ...skillsData].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2 mx-4 text-slate-400 w-40 flex-shrink-0"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-xl font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#1A0033] to-transparent"></div>
        </div>
      </section>
    </>
  );
};
export default Hero;
