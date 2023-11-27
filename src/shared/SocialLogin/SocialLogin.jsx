import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {logInWithGoogle} =useContext(AuthContext);
    const axiosSecure=useAxiosSecure();
    const navigate=useNavigate();
    const handleLoginWithGoogle=()=>{
        logInWithGoogle()
        .then((result)=>{
            console.log(result);
            const userInfo= {
                email:result.user.email,
                name:result.user.displayName,
                photoURL:result.user.photoURL,
              }
              axiosSecure.post("/users",userInfo)
              .then((res)=>{
                console.log(res.data);
                if(res.data.insertedId){
                   
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "User Created Successfully",
                      showConfirmButton: false,
                      timer: 1500
                    });
                    navigate("/");
                  }
              })
              .catch((error)=>{
                console.log(error);
              })

        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className=" mt-2 mb-2">
        <button onClick={handleLoginWithGoogle} className=
        "btn btn-primary ">
          <FaGoogle className="mr-2"/>
          Login with Google
        </button>
        </div>
    );
};

export default SocialLogin;