/* eslint-disable no-unused-vars */

import './Home.css'
import a from '../../assets/Picsart_24-04-04_00-02-31-240.jpg'
import d from '../../assets/M.M-Habib.pdf'
import { Typewriter } from 'react-simple-typewriter';
import bootstrap from '../../assets/logo/bootstrap.png'
import css  from '../../assets/logo/css.png'
import es6 from '../../assets/logo/es6.jpg'
import firebase from '../../assets/logo/firebase.png'
import html from '../../assets/logo/html.png'
import jquery from '../../assets/logo/jquery.png'
import js from '../../assets/logo/js.png'
import react from '../../assets/logo/react.png'
import reactbootstrap from '../../assets/logo/reactbootstrap.png'
import reactrouter from '../../assets/logo/reactrouter.png'
import tailwind from '../../assets/logo/tailwind.png'
import node from '../../assets/logo/node.png'
import express from '../../assets/logo/express.png'
import mongo from '../../assets/logo/mongo.png'
import jwt from '../../assets/logo/jwt.png'
import dotenv from '../../assets/logo/dotenv.png'
import render from '../../assets/logo/render.png'
import vscode from '../../assets/logo/vscode.png'
import pycharm from '../../assets/logo/pycharm.png'
import netlify from '../../assets/logo/netlify.png'
import heroku from '../../assets/logo/heroku.png'
import vercel1 from '../../assets/logo/vercel1.png'
import python from '../../assets/logo/python.png'
import c from '../../assets/logo/c.png'
import csharp from '../../assets/logo/csharp.png'
import cpp from '../../assets/logo/cpp.png'
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";







const Home = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </header>

      <section className="flex flex-col items-center justify-center  sec1 py-12 desktop:px-28 bg-gray-100 h-full mt-10 border-cyan-200">
        <div className="flex flex-col p-8 md:flex-row   items-center md:items-start md:justify-center w-full  ">
          <div className="flex flex-col items-center mb-4  md:mb-0 md:mr-8">
            <div className="card card-compact h-96 w-72 bg-base-100 shadow-xl">
              <figure className="h-full w-full ">
                <img
                  src={a}
                  alt="Profile"
                  className="object-cover h-full w-full rounded-t-lg "
                />
              </figure>
            </div>
            <div >
            <a
              href={d} download={d.pdf}
              
              className="mt-6 px-4 py-2 btn bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Download Resume
            </a>
            

             <button className="mt-6 ml-2 px-6 py-3 btn bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"  ><Link to='/contact'>Contact Me</Link> </button>

            </div>
            
          </div>
          <div className="flex flex-col  items-center text-center lg:items-start lg:text-left w-full lg:w-2/3 ml-0 lg:ml-10 border-2 border-sky-500">
          <span className='s-text'>
          <Typewriter
            words={['Hello!', 
            'I am M.M Habib.', 
            'Full Stack Web Developer.',
            'Studies BSc in CSE at BAIUST.',
            'Done My Internship at IPIT Limited',
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
            A confident, passionate, determined, and self-taught individual, seeking various opportunities to explore and research in the area of computer science.
            </p>
           
          </div>
        </div>
      </section>



      {/* skills section */}
      <section>
      <section className='s2-header'>
    <motion.div
    initial={{opacity: "00", }}
    animate={{opacity: "100%", }}
    exit={{opacity: "100%",  }}
    > 
    <h1 className='flickxyz h11 signboardAA'>Skills</h1>
    <div className='skills-con' >

      <div  data-aos="zoom-in" data-aos-duration="2000" className='divide signboardAA'>
        <u><h1 className='flickxyz d-header'>Front-End</h1></u>
        <p className='img-skill mt-3'><img src={html} alt="" /> HTML</p>
        <p className='img-skill mt-3'><img src={css} alt="" /> CSS</p>
        <p className='img-skill mt-3'><img src={bootstrap} alt="" /> Bootstrap</p>
        <p className='img-skill mt-3'><img src={js} alt="" /> JavaScript</p>
        
        <p className='img-skill mt-3'><img src={es6} alt="" /> ES6</p>
        <p className='img-skill mt-3'><img src={react} alt="" /> React</p>
        <p className='img-skill mt-3'><img src={reactrouter} alt="" /> React Router</p>
        <p className='img-skill mt-3'><img src={reactbootstrap} alt="" /> React Bootstrap</p>
        <p className='img-skill mt-3'><img src={tailwind} alt="" /> TailwindCSS</p>
        <p className='img-skill mt-3'><img src={firebase} alt="" /> Firebase</p>
    
      </div>

      <div data-aos="zoom-in" data-aos-duration="2000" className='divide signboardAA' >
        <u><h1 className='flickxyz d-header'>Back-End</h1></u>
        <p className='img-skill mt-3'><img src={node} alt="" /> Node.js</p>
        <p className='img-skill mt-3'><img src={express} alt="" /> Express.js</p>
        <p className='img-skill mt-3'><img src={mongo} alt="" /> MongoDB</p>
        <p className='img-skill mt-3'><img src={jwt} alt="" /> JSON web token (JWT)</p>
        <p className='img-skill mt-3'><img src={dotenv} alt="" /> Dotenv</p>
        <p className='img-skill mt-3'><img src={render} alt="" /> Render</p>
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000" className='divide signboardAA'>
        <u><h1 className='flickxyz d-header'>Tools & Tech</h1></u>
        <p className='img-skill mt-3'><img src={vscode} alt="" /> VSCode</p>
        <p className='img-skill mt-3'><img src={pycharm} alt="" /> PyCharm</p>
        <p className='img-skill mt-3'><img src={netlify} alt="" /> Netlify</p>
        <p className='img-skill mt-3'><img src={render} alt="" /> Render</p>
        <p className='img-skill mt-3'><img src={firebase} alt="" /> Firebase</p>
        <p className='img-skill mt-3'><img src={vercel1} alt="" /> Vercel</p>
        <p className='img-skill mt-3'><img src={heroku} alt="" /> Heroku</p>
        
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000" className='divide signboardAA'>
        <u><h1 className='flickxyz d-header'>Programming Language</h1></u>
        <p className='img-skill mt-3'><img src={python} alt="" /> Python</p>
        <p className='img-skill mt-3'><img src={js} alt="" /> JavaScript</p>
        <p className='img-skill mt-3'><img src={c} alt="" /> C Programming</p>
        <p className='img-skill mt-3'><img src={cpp} alt="" /> C++</p>
        <p className='img-skill mt-3'><img src={csharp} alt="" /> C#</p>
      </div>
      
    </div>
   
    <Marquee>
      <span className='m-img'>
      <img className='margin-ico' src={html} alt="" /> 
      <img className='margin-ico' src={css} alt="" /> 
      <img className='margin-ico' src={bootstrap} alt="" /> 
      <img className='margin-ico' src={js} alt="" /> 
      <img className='margin-ico' src={jquery} alt="" /> 
      <img className='margin-ico' src={es6} alt="" />
      <img className='margin-ico' src={react} alt="" /> 
      <img className='margin-ico' src={reactrouter} alt="" /> 
      <img className='margin-ico' src={reactbootstrap} alt="" /> 
      <img className='margin-ico' src={tailwind} alt="" /> 
      <img className='margin-ico' src={firebase} alt="" /> 
      <img className='margin-ico' src={csharp} alt="" /> 
      <img className='margin-ico' src={node} alt="" /> 
      <img className='margin-ico' src={express} alt="" /> 
      <img className='margin-ico' src={c} alt="" /> 
      <img className='margin-ico' src={mongo} alt="" /> 
      <img className='margin-ico' src={jwt} alt="" /> 
      <img className='margin-ico' src={dotenv} alt="" /> 
      <img className='margin-ico' src={render} alt="" /> 
      <img className='margin-ico' src={vscode} alt="" /> 
      <img className='margin-ico' src={pycharm} alt="" /> 
      <img className='margin-ico' src={netlify} alt="" /> 
      <img className='margin-ico' src={vercel1} alt="" /> 
      <img className='margin-ico' src={heroku} alt="" /> 
      <img className='margin-ico' src={cpp} alt="" /> 
      <img className='margin-ico' src={python} alt="" /> 
      </span>
    </Marquee>
 
    
    </motion.div>
  </section>
      

        
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
      <Helmet>
        <title>Habib | Home</title>
      </Helmet>
    </div>
  );
};

export default Home;
