
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
import AddCourse from "../../layout/DashBoard/AddCourse/AddCourse";
import CourseRequest from "../../layout/DashBoard/CourseRequest/CourseRequest";
import AllClasses from "../../pages/AllClasses/AllClasses";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import { axiosPublic } from "../../hooks/useAxios";
import Payment from "../../pages/Payment/Payment";
import MyCourses 
from "../../layout/DashBoard/MyCourses/MyCourses";
import MyEnrollClass from "../../layout/DashBoard/MyEnrollClass/MyEnrollClass";
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
          path:"/allClass",
          element:<AllClasses/>
        },

        {
          path:"/courseDetails/:id",
          element:<PrivateRoute>
            <CourseDetails/>
          </PrivateRoute>,
          loader:({params})=>axiosPublic.get(`/addCourseRequest/${params.id}`)
          

        },
        {
          path:"/payment/:id",
          element:<PrivateRoute>
            <Payment/>
          </PrivateRoute>,
          loader:({params})=>axiosPublic.get(`/addCourseRequest/${params.id}`)
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
       },
       {
        path:"/dashboard/courseRequests",
        element:<CourseRequest/>
       },
      //  teacher
       {
        path:"/dashboard/teacher/addCourse",
        element:<AddCourse/>
      },
      // user
      {
        path:"/dashboard/myCourses",
        element:<MyCourses/>
      },
      {
        path:"/dashboard/CourseDetails/:id",
        element:<MyEnrollClass/>,
       
      }
      ]

     
    }
  ]);

export default router;