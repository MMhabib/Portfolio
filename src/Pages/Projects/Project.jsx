
import i from '../../assets/bookstore.png';
import j from '../../assets/logo/halalbro.jpg';
import d from '../../assets/Dashboard.png';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

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
        Email: habib@gmail.com <br />
        Password: habib#@321 <br />
        Certificate Verification: <br />
        Department: CSE <br />
        Student ID: 1111051<br />
      </>
    ),
    clientSite: "https://github.com/MMhabib/OnlineBookSellFrontend.git",
    serverSite: "https://github.com/MMhabib/OnlinebookseellServer.git"
  },
  {
    title: "HalaBrotherRestuarant",
    imgSrc: j,
    alt: "441900993-1833189517164108-8520224708537517379-n",
    details: (
      <>
        <ul>
          <li>• Developed a website for Restuarant management.</li>
          <li>• Customers can give online orders through this website.</li>
          <li>• Customers can create account for see order history or list their favourite items.</li>
          <li>• Made an admin dashboard with versatile functionalities.</li>
          <li>• Owner can manage payments,orders and everything related to testuarant.</li>
        </ul>
        <h3 className="text-sky-400 font-bold">Admin Login:</h3>
        Email: admin1@gmail.com <br />
        Password: Admin#@321 <br />
        Customer Login: <br />
        Email: akib@gmail.com <br />
        Password: Akib#@321 <br />
        Certificate Verification: <br />
        Department: CSE <br />
        Student ID: 111105<br />
      </>
    ),
    clientSite: "https://github.com/MMhabib/Halal-brother-frontend-restaurant.git",
    serverSite: "#"
  },
  {
    title: "Admin_Dashboard",
    imgSrc: d,
    alt: "441900993-1833189517164108-8520224708537517379-n",
    details: (
      <>
        <p>
        The Admin Dashboard is a comprehensive React.js application designed to manage and visualize various administrative tasks. This project utilizes multiple libraries and components to create a responsive, interactive, and user-friendly interface. It includes various features such as data visualization, user management, order processing, and customizable themes.
        </p>
        <p>The Admin Dashboard is a well-structured React application that leverages various libraries and custom components to create a functional and visually appealing interface. The use of Context API for state management ensures a seamless user experience, while the extensive use of conditional rendering and dynamic styles makes the application highly customizable and responsive.</p>
        {/* <h3 className="text-sky-400 font-bold">Admin Login:</h3>
        Email: admin1@gmail.com <br />
        Password: Admin#@321 <br />
        Student Login: <br />
        Email: akib@gmail.com <br />
        Password: Akib#@321 <br />
        Certificate Verification: <br />
        Department: CSE <br />
        Student ID: 1111019<br /> */}
        <h1 className='text-lg font-semibold my-2'>Tools & Technology:</h1 > 
        <p className='font-medium '>React, TailwindCss, DaisyUI, React Router, Node.Js, ExpressJS, 
          <span>JSON web token (JWT), Firebase, MongoDB, Git, VS Code.</span></p>
      </>
    ),
    ClientSite: "https://github.com/MMhabib/Admin_dashboard.git",
    
  },
  
  // Add more projects as needed
];

const Project = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

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
                <a href={project.clientSite} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline btn-info">Client site</button>
                </a>
              )}
              {project.serverSite && (
                <a href={project.serverSite} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline btn-accent">Server site</button>
                </a>
              )}
              {project.liveSite && (
                <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
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
      <Helmet>
        <title>Habib | Projects</title>
      </Helmet>
    </div>
  );
};

export default Project;
