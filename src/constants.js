// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";

import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

import csharpLogo from "./assets/tech_logo/csharp.png";
import shadcnlogo from "./assets/tech_logo/shadnui.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's

// Project Section Logo's
import carrental from './assets/work_logo/Carrental.jpg'
import Admin from './assets/work_logo/Admin.jpg'
import recipeapp from './assets/work_logo/recipeapp.jpg'

export const skillsData = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "React JS", logo: reactjsLogo },
  { name: "Node JS", logo: nodejsLogo },
  { name: "TypeScript", logo: typescriptLogo },
  { name: "Redux", logo: reduxLogo },
  { name: "Next JS", logo: nextjsLogo },
  { name: "Tailwind CSS", logo: tailwindcssLogo },
  { name: "Material UI", logo: materialuiLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "SASS", logo: sassLogo },
  { name: "Github", logo: githubLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "Vs Code", logo: vscodeLogo },
  { name: "Git", logo: gitLogo },
];

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Software Developer(Intern)",
    company: "IPIT LIMITED",
    date: "March 2024 - June 2024",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  
];

export const educations = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdHdcg6tnvQq-V9OPo2W7A0e0mt1dtBmJxQ&s",
    school:
      "Bangladesh Army International University of Science and Technology",
    date: "March 2020 - March 2024",
    grade: "",
    desc: "I am pursuing a Bachelor's degree in Computer Science and Engineering (BSc) at BAIUST, Cumilla. My coursework includes Data Structures, Algorithms, Software Engineering, and Web Development. The experience has strengthened both my theoretical foundation and practical skills.",
    degree: "Bachelor of Science in CSE (BSc)",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZ20OFrPchAgPvKiatvajIBaleDPK8iqtwA&s",
    school: "Cumilla Government College",
    date: "June 2016 - April 2018",
    grade: "",
    desc: "Completed my Higher Secondary Certificate (HSC) from Cumilla Government College with a focus on science subjects including Physics, Chemistry, and Mathematics.",
    degree: "Higher Secondary Certificate (HSC)",
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/c/c6/Comilla_Zilla_School.jpg",
    school: "Cumilla Zilla School",
    date: "January 2011 - March 2016",
    grade: "",
    desc: "Completed my Secondary School Certificate (SSC) at Cumilla Zilla School. Developed a strong academic foundation and participated in various extracurricular activities.",
    degree: "Secondary School Certificate (SSC)",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-WAynZop1XsDA7LSNJ7AxQLh6Yn6KMLx1g&s",
    school: "Gulbagicha Model Government Primary School",
    date: "January 2010 - December 2010",
    grade: "",
    desc: "Completed my Primary School Certificate (PSC) at Gulbagicha Model Government Primary School, Cumilla.",
    degree: "Primary School Certificate (PSC)",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eMIGMSMDglSDeLQfp80bttz9541ycYpX-g&s",
    school: "YWCA of Cumilla",
    date: "January 2004 - December 2009",
    grade: "",
    desc: "Studied from Nursery to Class-4 at YWCA of Cumilla. Built a strong foundation in general academics and communication.",
    degree: "Nursery to Class-4",
  },
];

export const projects = [
  {
    id: 0,
    title: "Car Rental",
    description:
      "A full-stack car rental platform built with MERN Stack (MongoDB, Express.js, React, Node.js). The application allows users to browse, search, and book rental cars with options to filter by location, date, and car type. Admins can manage cars and user roles. The UI is responsive and styled using Tailwind CSS, with additional features like authentication, dynamic search, and booking management. It includes secure user authentication with role-based access, persistent data storage with MongoDB, and smooth navigation using React Router. The app is optimized for both desktop and mobile users, providing a seamless and modern rental experience",
    image: carrental,

    logos: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
    github: "https://github.com/MMhabib/Car_Rental.git",
    webapp: "https://car-rental-client-umber.vercel.app/",
  },
  {
    id: 1,
    title: "Admin Dashboard",
    description: `A responsive admin dashboard built with React.js, designed for managing and visualizing application data.
It features dynamic charts, stat cards, and interactive tables to track key metrics.
The UI is styled with Tailwind CSS, offering a modern, clean, and mobile-friendly layout.
React Router is used for smooth multi-page navigation.
Components are modular and reusable for scalability.
The dashboard includes sidebar navigation, light/dark mode toggle, and responsive layout adjustments.
Icons and charts are implemented using libraries like react-icons and chart.js or recharts.
Ideal for use in admin panels, analytics platforms, or business dashboards.
Deployed for quick preview and ready for backend integration.`,
    image: Admin,
    logos: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Shadc/ui", logo: shadcnlogo},
      { name: "Vercel", logo: vercelLogo },
      { name: "React icons",},
    ],
    github: "https://github.com/MMhabib/Admin_Dashboard.git",
    webapp: "https://admin-dashboard-ft81.vercel.app/",
  },
  {
    id: 2,
    title: "Recipe-Finding App",
    description:
      `Recipe Finder App is a responsive web application that allows users to search and explore a wide range of recipes using The Meal Database API. Users can find recipes either by entering a recipe name or a specific recipe ID. Upon selection, the app displays detailed information including the ingredients, preparation instructions, and an embedded video tutorial if available. Built using React, it provides a smooth and dynamic user experience. React Router is utilized for client-side routing to enable seamless navigation across pages. Video playback is handled through React Player, ensuring compatibility with YouTube content. The application is designed to be intuitive and informative, helping users quickly discover and learn new recipes. This project demonstrates API integration, component-based architecture, and video embedding in React.`,
    image: recipeapp,
   logos: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Vercel", logo: vercelLogo },
    ] ,
    github: "https://github.com/MMhabib/Recipe-finding.git",
    webapp: "https://recipe-finding-xi.vercel.app/",
  },
  
];
