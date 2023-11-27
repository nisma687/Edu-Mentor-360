import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
        {/* sidebar */}
    <div className="w-60  
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
        text-white opacity-90 
        font-semibold italic
        min-h-screen ">
    <ul className="menu mt-12 ml-10">
     
       
       
        <li>

         <NavLink
            to="/dashboard/teacherRequests"
         className="uppercase"
          >
          Teacher Requests
            </NavLink>
      </li>

   
    
       
     
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