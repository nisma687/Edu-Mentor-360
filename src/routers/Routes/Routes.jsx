
import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import DashBoard from "../../layout/DashBoard/DashBoard";
import TeachOnEdu from "../../pages/TeachOnEdu/TeachOnEdu";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RequestsTeacher from "../../layout/DashBoard/RequestsTeacher/RequestsTeacher";
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
        {
          path:"/teachOnEduMentor",
          element:<PrivateRoute>
            <TeachOnEdu/>
          </PrivateRoute>
        }
      ]
    },
    {
      path:"/dashboard",
      element: <PrivateRoute>
        <DashBoard/>
      </PrivateRoute>,
      children:[
      // admin
       {
        path:"/dashboard/teacherRequests",
        element:<RequestsTeacher  />
       }
      ]

     
    }
  ]);

export default router;