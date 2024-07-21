import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "../App";
import Intro from '../pages/Overall'
import Blogs from "../Blogs/Blogs"
import Hobbies from "../component/Hobbies";
  


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
            path : "/Blog",
            element : <Blogs/>
           }
         
      ]
    }
  ],
  {
    basename: '/AungKaungSett',  // Replace with your subdirectory path
  }
  );

  export default router;