
import { Link, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
// import { useAuth } from "../../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import SocialLogin from "../../shared/SocialLogin/socialLogin";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const navigate=useNavigate();
      const axiosSecure=useAxiosSecure();
      const {createUser,updateUserProfile}=useContext(AuthContext);
      const onSubmit = (data) => {
        console.log(data);
        const userInfo= {
          email:data.email,
          name:data.name,
          photoURL:data.photoURL,
        }
        createUser(data.email,data.password)
        .then((result)=>{
          console.log(result);
          updateUserProfile(data.name,data.photoURL)
          .then((result)=>{
            console.log(result);
            
            axiosSecure.post("/users",userInfo)
          .then((res)=>{
            console.log(res);
            if(res.data.insertedId){
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/");
            }
            navigate("/");
           
          })
          .catch((error)=>{
            console.log(error);
          })
           

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
        <div className="hero
        mt-10 
         min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
             <img src=
             "https://i.ibb.co/6W3Tmkv/signupimg.jpg" alt="login page image
             " />
      
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
            <form
           onSubmit={handleSubmit(onSubmit)}
      
             className="card-body">
            <h1 className="text-2xl font-bold text-center">Sign Up Today!!!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"
                name="name" 
                {...register("name", { required: true })}
                placeholder="name" className="input input-bordered"  />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                name="email" 
                placeholder="email" 
                {...register("email", { required: true })}
                className="input input-bordered"  />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" 
                name="password"
                {...register("password", { required: true,maxLength: 20,minLength: 8 })}
                placeholder="password" className="input input-bordered"  />
                 {errors.password?.type==="required" && <span className="text-red-600">Password is required</span>}
                 {
                     errors.password?.type==="maxLength" && <span className="text-red-600">Password should be less than 20 characters</span>
                  }
                  {
                     errors.password?.type==="minLength" && <span className="text-red-600">Password should be more than 8 characters</span>
                 }
              </div>
              <div className="form-control">
              <label className="label">
          
                <span className="label-text">Photo Url</span>
              </label>
              <input 
              type="text"  {...register("photoURL", { required: true })}
               name="photoURL" placeholder="Your Photo Url" className="input input-bordered" />
              {errors.photoURL && <span className="text-red-600">Photo Url is required</span>}
            </div>
              <div className="form-control mt-6">
                
              <input type="submit"
              className="btn btn-primary"
               value="SignUp" />
              
      
              </div>
              <div className="flex justify-center">
                <SocialLogin />
              </div>
            </form>
            <p className="text-center font-semibold mb-4">New to here?Please<Link to="/signIn" className="underline text-orange-600">Sign In</Link></p>
            
          </div>
        </div>
      </div>
    );
};

export default SignUp;