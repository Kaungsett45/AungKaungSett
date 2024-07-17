import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "../App";
import Intro from '../pages/Overall'

  const router = createBrowserRouter(
    [
    {
      path: "/",
      element: <App/>,
      children:[
           {
            path: "/",
            element: <Intro/>,
           }
      ]
    }
  ],
  {
    basename: '/AungKaungSett',  // Replace with your subdirectory path
  }
  );

  export default router;