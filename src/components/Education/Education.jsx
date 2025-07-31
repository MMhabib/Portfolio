import React from "react";
import { educations } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="education"
      className=" font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div data-aos="zoom-in-up" data-aos-duration="800" className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {educations.map((education, index) => (
          <div
          data-aos-duration="1000" key={education.id} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={education.img}
                alt={education.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:mx-44 mx-4 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={education.img}
                    alt={education.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="md:text-2xl sm:text-xl font-semibold text-white">
                      {education.degree}
                    </h3>
                    <h4 className="md:text-base sm:text-sm  text-gray-400">
                      {education.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{education.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{education.desc}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
