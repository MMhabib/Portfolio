

import './App.css'

import Experience from './components/Experience/Experience';


import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';


import Hero from './components/hero/Hero';



import AOS from 'aos';
import 'aos/dist/aos.css';



AOS.init();
   
    


function App() {


  return (
    

       <div className="bg-[#050414] w-full overflow-x-hidden">

      <Hero/>
      
      <div className=" pt-20 max-w-7xl mx-auto max-sm:px-2">
        
        
        
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
        
      </div>

    </div>
  );
}


export default App
