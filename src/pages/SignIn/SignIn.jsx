import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
const SignIn = () => {
    const {
        register,
        handleSubmit,
      
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data)}
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
             <img src=
             "https://i.ibb.co/z2c4QWf/istockphoto-1256982008-1024x1024.jpg" alt="login page image
             " />
      
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
          <form
           onSubmit={handleSubmit(onSubmit)}
      
             className="card-body">
            <h1 className="text-2xl font-bold text-center">Please Sign In</h1>
             
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
              
              <div className="form-control mt-6">
                
              <input type="submit"
              className="btn btn-primary"
               value="SignIn" />
              
      
              </div>
              <div>
                <button
               
                className="btn btn-ghost btn-sm btn-block mt-4"
                >
                    <FaGoogle />
                Sign In With Google</button>
              </div>
            </form>
            <p className="text-center font-semibold mb-4">New to here?Please<Link to="/signUp" className="underline text-orange-600">Sign Up</Link></p>
            
          </div>
        </div>
      </div>
    );
};

export default SignIn;