import { useState } from "react";
import { projects } from "../../constants";
import { Card } from "../card/Card";
import '../hero/style.css'
import Marquee from "react-fast-marquee";



const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-10 font-sans">
      {/* Section Title */}
      <div data-aos="zoom-in" data-aos-duration="1200" className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project,index) => (
          <div  data-aos-duration="2000" key={project.id} data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}>
<Card 
           
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={project.logos}
            
            githubLink={project.github}
            liveLink={project.webapp}
            onClick={() => handleOpenModal(project)}
          />
          
          </div>
            
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 "
          onClick={handleCloseModal} // Close modal on clicking outside
        >
          <div
            className="bg-gray-900 max-h-screen overflow-y-auto rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl mx-auto overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on clicking inside
          >
            <div className="flex justify-end p-2">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-6 p-4">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-4 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                
                {/* <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
                {selectedProject.logos?.length > 0 && (
  <div className="mb-4 overflow-hidden">
  <h1 className="text-white font-bold mb-2">Tech Used:</h1>
  <div className="overflow-hidden w-full">
  <Marquee
      gradient={false}         // Removes gradient fade on edges
      speed={50}               // Adjust speed (higher = faster)
      pauseOnHover={true}      // Optional: pause animation when hovered
    >
      {selectedProject.logos.map(({ name, logo }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center mx-6 py-2"
        >
          <img src={logo? logo:''}  className="h-8 mb-1" />
          <span className="text-base text-gray-400 text-nowrap w-full text-center">
            {name}
          </span>
        </div>
      ))}
    </Marquee>
</div>

</div>

)}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
