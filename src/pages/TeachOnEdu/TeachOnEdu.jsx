import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import Tittle from "../../component/Tittle";

const TeachOnEdu = () => {
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
      
        
      } = useForm();
      const axiosSecure=useAxiosSecure();
      const onSubmit = (data) => {
        console.log(data);
        const teachInfo={
            name:data.name,
            email:data.email,
            photoURL:data.photoURL,
            category:data.category,
            experience:data.experience,
            title:data.title,
            status:data.status,
            

        };
        axiosSecure.post("/teacherRequest",teachInfo)
        .then((res)=>{
            console.log(res.data);
            
            if(res.data.insertedId)
            {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Successfully Request Done",
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
            if(res.data.insertedId===null)
            {
                Swal.fire({
                    title: "You have already requested once please wait for further response",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
            }
        })
        .catch((error)=>{
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!Please try again",
                
              });
        })
        // console.log(teachInfo);
    }
    return (
        <div className="my-20">
          <div className="hero 
          bg-gray-100
          
          ">
          

  <div className="hero-content flex-col
  text-center 
  
    max-w-full
  w-full mr-12
   lg:flex-row">

        <h2 className="text-3xl text-purple-500 font-semibold italic">Please Fill up data 
        <br />
        and
        <br />
         give the information correctly
         <br />
         {"------->>>>"}
         </h2>
    <div className="card 
     bg-gradient-to-r from-indigo-500 
     opacity-90
    shrink-0 w-1/2 max-w-full shadow-2xl bg-base-100">
      <form 
        onSubmit={handleSubmit(onSubmit)}
      className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name:</span>
          </label>
          <input
            {...register("name", { required: true })}
           type="text" placeholder="Your Name"
          defaultValue={user?.displayName}
           className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email:</span>
          </label>
          <input type="email" 
            defaultValue={user?.email}
            {...register("email", { required: true })}
          placeholder="Your Email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Title:</span>
          </label>
          <input type="text" 
            
            {...register("title", { required: true })}
          placeholder="Title please" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Status:</span>
          </label>
          <input type="text" 
           value={"Pending"}
            {...register("status", { required: true })}
          placeholder="Status" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
                Image:
            </span>
          </label>
          <input type="text"
            {...register("photoURL", { required: true })}
           placeholder="Your Img 
          Url" className="input input-bordered"
            defaultValue={user?.photoURL}
           required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
                Category:
            </span>
          </label>
          <select
            {...register("category", { required: true })}
           className="select select-bordered w-full" required>
            <option disabled="disabled"
            defaultValue="default"
            >Choose option</option>
            <option>Web development</option>
            <option>Digital Marketing</option>
            <option>Business Analytics</option>
            <option>Data Science</option>
            <option>Machine Learning</option>
            <option>Spoken English</option>
           
            </select>
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
             Experience
            </span>
          </label>
         <select
            {...register("experience", { required: true })}
          className="select select-bordered w-full" required>
            <option disabled="disabled"
            defaultValue="default"
            >Choose option</option>
            
            <option>Beginner(0-1)Years</option>
            <option>Experienced(4-5)Years</option>
            <option>Some Idea</option>
            <option>Expert(10+)</option>
           
            </select>

          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default TeachOnEdu;