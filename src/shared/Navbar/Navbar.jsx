import { NavLink, useNavigate } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user,logOut}=useAuth();
  const navigate=useNavigate();
  const handleLogOut=()=>{
    logOut()
    .then((result)=>{
      console.log(result);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "LogOut Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/");
    })
    .catch((error)=>{
      console.log(error);
    })
  }
    const navlinks=<>
        <li><NavLink to="/">Home</NavLink></li>
        
        <li><NavLink to="/allClass">All Classes</NavLink></li>
        <li><NavLink
        to="/teachOnEduMentor"
        >Teach On EduMentor360</NavLink></li>
       {!user && <li><NavLink to="/signIn">Sign In</NavLink></li>}
    </>;
    return (
        <div>
            <div className="navbar 
            h-[70px]
            bg-gradient-to-l from-indigo-500 
            opacity-90
             bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl italic ">
    <GiTeacher />
      <span className=" text-purple-500
        italic font-semibold
     ">
        
        EduMentor</span>
    <span className="text-primary">360</span>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    
  <div className="dropdown 
  dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user?
          <img src={user?.photoURL} alt=""/>
          :<img alt="Default Picture" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />}
        </div>
      </div>
      <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      
        {user && <li className="disabled">
          <p className="mt-2 mb-2 font-bold">
            {user?.displayName}
          </p>
          </li>}
        {user && <li><NavLink to="/dashboard">
          DashBoard</NavLink></li>}
        
       {user ? <li><button
        onClick={handleLogOut}
        className="btn btn-primary">
        LogOut</button></li>:
        <li><NavLink to="/signIn">Sign In</NavLink></li>
        }
      </ul>
    </div>









  </div>
</div>
</div>
    );
};

export default Navbar;