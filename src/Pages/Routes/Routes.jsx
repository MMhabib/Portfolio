import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Project from './../Projects/Project';
import Education from './../Education/Education';



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
                path:'/',
                element:<Home/>,
            },
        ]

    }
])