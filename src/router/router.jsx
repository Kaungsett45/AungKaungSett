import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "../App";
import Intro from '../pages/Overall'
import Blogs from "../Blogs/Blogs"
import Project from "../component/Project";
import B1 from "../Blogs/Blogsch/B1";
  


const router = createBrowserRouter(
    [
    {
      path: "/",
      element: <App/>,
      children:[
           {
            path: "/",
            element: <Intro/>,
           },{
            path : "/blog",
            element : <Blogs/>
           },{
            path : "/projects",
            element : <Project/>
           },{
            path : "/blg-1",
            element : <B1/>
           }
         
      ]
    }
  ],
  {
    basename: '/AungKaungSett',  // Replace with your subdirectory path
  }
  );

  export default router;