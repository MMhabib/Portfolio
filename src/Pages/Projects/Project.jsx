import React, { useState } from 'react';
import i from '../../assets/bookstore.png';

const projects = [
  {
    title: "OnlineBookstore",
    imgSrc: i,
    alt: "441900993-1833189517164108-8520224708537517379-n",
    details: (
      <>
        <ul>
          <li>• Developed a Bookstore.</li>
          <li>• User Can Buy and Sell Books.</li>
          <li>• Made an admin dashboard with versatile functionalities.</li>
          <li>• Developed an intuitive User dashboard with functionalities.</li>
        </ul>
        <h3 className="text-sky-400 font-bold">Admin Login:</h3>
        Email: admin1@gmail.com <br />
        Password: Admin#@321 <br />
        Student Login: <br />
        Email: akib@gmail.com <br />
        Password: Akib#@321 <br />
        Certificate Verification: <br />
        Department: CSE <br />
        Student ID: 1111051<br />
      </>
    ),
    clientSite: "https://github.com/MMhabib/OnlineBookSellFrontend.git",
    serverSite: "https://github.com/MMhabib/OnlinebookseellServer.git"
  },
  {
    title: "OnlineBookstore",
    imgSrc: i,
    alt: "441900993-1833189517164108-8520224708537517379-n",
    details: (
      <>
        <ul>
          <li>• Developed a Bookstore.</li>
          <li>• User Can Buy and Sell Books.</li>
          <li>• Made an admin dashboard with versatile functionalities.</li>
          <li>• Developed an intuitive User dashboard with functionalities.</li>
        </ul>
        <h3 className="text-sky-400 font-bold">Admin Login:</h3>
        Email: admin1@gmail.com <br />
        Password: Admin#@321 <br />
        Student Login: <br />
        Email: akib@gmail.com <br />
        Password: Akib#@321 <br />
        Certificate Verification: <br />
        Department: CSE <br />
        Student ID: 1111019<br />
      </>
    ),
    liveSite: "https://daisyui.com/components/collapse/",
    serverSite: "#"
  },
  {
    title: "OnlineBookstore",
    imgSrc: i,
    alt: "441900993-1833189517164108-8520224708537517379-n",
    details: (
      <>
        <ul>
          <li>• Developed a Bookstore.</li>
          <li>• User Can Buy and Sell Books.</li>
          <li>• Made an admin dashboard with versatile functionalities.</li>
          <li>• Developed an intuitive User dashboard with functionalities.</li>
        </ul>
        <h3 className="text-sky-400 font-bold">Admin Login:</h3>
        Email: admin1@gmail.com <br />
        Password: Admin#@321 <br />
        Student Login: <br />
        Email: akib@gmail.com <br />
        Password: Akib#@321 <br />
        Certificate Verification: <br />
        Department: CSE <br />
        Student ID: 1111019<br />
      </>
    ),
    liveSite: "https://daisyui.com/components/collapse/",
    serverSite: "#"
  },
  
  // Add more projects as needed
];

const Project = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleProjects = showMore ? projects : projects.slice(0, 2);

  return (
    <div>
      {visibleProjects.map((project, index) => (
        <div key={index} className="m-4 card lg:card-side bg-base-100 shadow-xl flex flex-col lg:flex-row">
          <figure className="w-full lg:w-[75%] p-6 flex-grow">
            <img
              className="h-full w-full border-2 border-rose-500 p-2 rounded-lg object-cover"
              src={project.imgSrc}
              alt={project.alt}
            />
          </figure>
          <div className="card-body w-full lg:w-1/2 flex-grow flex flex-col justify-between">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.details}</p>
            <div className="card-actions sm:justify-center lg:justify-end">
              {project.clientSite && (
                <a href={project.clientSite}>
                  <button className="btn btn-outline btn-info">Client site</button>
                </a>
              )}
              {project.serverSite && (
                <a href={project.serverSite}>
                  <button className="btn btn-outline btn-accent">Server site</button>
                </a>
              )}
              {project.liveSite && (
                <a href={project.liveSite}>
                  <button className="btn btn-outline btn-info">Live site</button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="m-4 flex justify-center">
        <button onClick={handleShowMore} className="btn btn-primary">
          {showMore ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default Project;
