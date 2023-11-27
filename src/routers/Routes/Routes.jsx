
import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/signIn",
          element: <SignIn/>,
        },
        {
          path: "/signUp",
          element: <SignUp/>,
        },
      ]
    },
  ]);

export default router;