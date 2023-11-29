import { NavLink, Outlet } from "react-router-dom";
import useTeacher from "../../hooks/useTeacher";
import useAuth from "../../hooks/useAuth";
import useStudent from "../../hooks/useStudent";


const DashBoard = () => {
    const [teacher]=useTeacher();
   //  console.log(teacher.role);
    const isTeacher=teacher.role==="teacher";
   //  console.log(isTeacher);
    const {user}=useAuth();
    const {student}=useStudent();
   //  console.log(student);
   
    const isStudent=user?.role==="student";
   //  console.log(isStudent);
   const isAdmin=user?.role==="admin";
   // console.log(isAdmin);
    
    return (
        <div className="flex">
        {/* sidebar */}
    <div className="w-60  
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
        text-white opacity-90 
        font-semibold italic
        min-h-screen ">
    <ul className="menu mt-12 ml-10">
     
       {
        isTeacher && <li>

        <NavLink
           to="/dashboard/teacher/addCourse"
        className="uppercase"
         >
            Add Course
           </NavLink>
     </li>
       }

       {/* admin routes */}
      {    !student && !isTeacher &&
            <>
              <li>
         <NavLink
            to="/dashboard/teacherRequests"
         className="uppercase"
          >
          Teacher Requests
            </NavLink>
      </li>
      <li>

         <NavLink
            to="/dashboard/courseRequests"
         className="uppercase"
          >
          Course Requests
            </NavLink>
      </li>
            </>
      }
      
       {/* user routes */}

         {   student && <li>

               <NavLink
                  to="/dashboard/myCourses"
               className="uppercase"
               >
               My Courses
                  </NavLink>
               </li>
         }
    
       
     
      {/* shared content */}
      <div className="divider"></div>
      <li>
         <NavLink
            to="/"
         className="uppercase"
          >
           Home</NavLink>
      </li>
      
    
      

    </ul>

    </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
            <Outlet />
        </div>
        
    </div>
    );
};

export default DashBoard;