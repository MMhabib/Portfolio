import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Project from './../Projects/Project';
import Education from './../Education/Education';
import Skill from './../Skills/Skill';
import Certificate from './../Cerificate/Certificate';
import Contact from './../Contact/Contact';



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/projects',
                element:<Project/>,
            },{
                path:'/education',
                element:<Education/>,
            },
            {
                path:'/certificate',
                element:<Certificate/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
        ]

    }
])