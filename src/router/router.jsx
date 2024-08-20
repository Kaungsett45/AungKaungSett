import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "../App";
import Intro from '../pages/Overall'
import Blogs from "../Blogs/Blogs"

import Project from "../component/Project";
import B1 from "../Blogs/Blogsch/B1";
import B2 from "../Blogs/Blogsch/B2";
import B3 from "../Blogs/Blogsch/B3";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Intro />,
        },
        {
          path: "/projects",
          element: <Project />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
            {
              path: "blogs/blog-1",
              element: <B1 />,
            },
            {
              path: "blogs/blog-2",
              element: <B2 />,
            },
            {
              path: "blogs/blog-3",
              element: <B3 />,
            }

          
       
       
      ],
    },
  ],
  {
    basename: "/AungKaungSett", // Replace with your subdirectory path
  }
);

  export default router;