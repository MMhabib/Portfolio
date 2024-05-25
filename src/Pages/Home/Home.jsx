import { RiTailwindCssFill } from "react-icons/ri";
import './Home.css'
import d from '../../assets/HabibResume.pdf'
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";;
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </header>

      <section className="flex flex-col items-center justify-center  sec1 py-12 desktop:px-28 bg-gray-100 h-full mt-10 border-cyan-200">
        <div className="flex flex-col p-8 md:flex-row   items-center md:items-start md:justify-center w-full  ">
          <div className="flex flex-col items-center mb-4  md:mb-0 md:mr-8">
            <div className="card card-compact h-96 w-72 bg-base-100 shadow-xl">
              <figure className="h-full w-full">
                <img
                  src="/src/assets/Picsart_24-04-04_00-02-31-240.jpg"
                  alt="Profile"
                  className="object-cover h-full w-full rounded-t-lg"
                />
              </figure>
            </div>
            <a
              href={d} download={d.pdf}
              
              className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Download CV
            </a>
          </div>
          <div className="flex flex-col  items-center text-center lg:items-start lg:text-left w-full lg:w-2/3 ml-0 lg:ml-10 border-2 border-sky-500">
          <span className='s-text'>
          <Typewriter
            words={['Hello!', 
            'I am M.M Habib.', 
            'Full Stack Web Developer.', 
            'Studies BSc in CSE at BAIUST.',
            'Ongoing Internship at IPIT Limited',
            'Assistant Secretary at BAIUST Computer Club.',
            'Former Instructor (Web Design) at Baiust Computer Club.',
           
            
            
        ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            deleteSpeed={120}
            delaySpeed={1000}
            
          />
        </span>
            <p className="text-lg max-w-2xl p-6 mt-16 mb-16">
              I am a web developer with a passion for creating beautiful and
              functional web applications. My skills include HTML, CSS,
              JavaScript, 
            </p>
           
          </div>
        </div>
      </section>



      {/* skills section */}
      <section>
      
      

        
      </section>
      {/* <div className='divide signboardAA'>
        <u><h1 className='flickxyz d-header'>Front-End</h1></u>
        <p className='img-skill mt-3'><img src={html} alt="" /> HTML</p>
        <p className='img-skill mt-3'><img src={css} alt="" /> CSS</p>
        <p className='img-skill mt-3'><img src={bootstrap} alt="" /> Bootstrap</p>
        <p className='img-skill mt-3'><img src={js} alt="" /> JavaScript</p>
        <p className='img-skill mt-3'><img src={jquery} alt="" /> jQuery</p>
        <p className='img-skill mt-3'><img src={es6} alt="" /> ES6</p>
        <p className='img-skill mt-3'><img src={react} alt="" /> React</p>
        <p className='img-skill mt-3'><img src={reactrouter} alt="" /> React Router</p>
        <p className='img-skill mt-3'><img src={reactbootstrap} alt="" /> React Bootstrap</p>
        <p className='img-skill mt-3'><img src={tailwind} alt="" /> TailwindCSS</p>
        <p className='img-skill mt-3'><img src={firebase} alt="" /> Firebase</p>
    
      </div> */}
    </div>
  );
};

export default Home;
