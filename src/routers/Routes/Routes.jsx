
import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../../layout/Main/Main";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: "/",
          element: <h1>Home</h1>,
        },
        {
          path: "/about",
          element: <h1>About</h1>,
        },
        {
          path: "/contact",
          element: <h1>Contact</h1>,
        },
      ]
    },
  ]);

export default router;