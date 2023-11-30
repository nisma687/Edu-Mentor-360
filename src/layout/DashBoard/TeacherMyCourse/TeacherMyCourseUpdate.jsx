import {  useParams } from "react-router-dom";
import useTeachMyCourse from "../../../hooks/useTeachMyCourse";
import Tittle from "../../../component/Tittle";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useEffect } from "react";


const TeacherMyCourseUpdate = () => {
    const {id}=useParams();
    // console.log(id);
    const [teacherCourse]=useTeachMyCourse();
    // console.log(teacherCourse);
    // const teacher=teacherCourse[0];
    // console.log(teacher);
    const selectedCourse= teacherCourse.filter(item=>item._id==id)[0];
    // console.log(selectedCourse);
    const axiosPublic=useAxios();
    // const axiosSecure=useAxiosSecure();
    const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
    // console.log(image_hosting_api);
    const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const { register,
        handleSubmit } = useForm();
        // const axiosPublic=useAxios();
        const onSubmit =
         async(data) => {

            console.log(data);
            const imageFile={image:data.image[0]};
            const res=await axiosPublic.post(image_hosting_api,imageFile,{
                headers:{
                    'content-type':'multipart/form-data'
                }
            });
            console.log(res.data);
            // const status="Pending";
            // if(res.data.success)
            // {
            //     // now data can be added
            //     const courseInfo={
            //         title:data.title,
                   
            //         price:data.price,
            //         description:data.description,
            //         img:res.data.data.display_url,
                    
            //     }
            //     // console.log(courseInfo);
            //     // const result=await axiosSecure.patch(`/addCourseRequest/${selectedCourse.email}`,courseInfo);
            //     console.log(result.data);
            //     if(result.data.insertedId){
                   
            //         reset();
            //         Swal.fire({
            //             position: "top-end",
            //             icon: "success",
            //             title: "Course Add Requested Successfully,wait for admin approval",
            //             showConfirmButton: false,
            //             timer: 1500
            //           });
            //         // setPending("pending");
            //     }
    
            // }
        }  
   
    
    
    
    return (
        <div>
        
        <Tittle
        subHeading={"You can update your course here"}
         heading={"Update"}/>
          <div >
          
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">
                            Title:
                        </span>
                    </label>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register('title', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                  
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input
                            type="text"
                            value={selectedCourse?.name}
                            placeholder="Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input
                            type="text"
                            value={selectedCourse?.email}
                            placeholder="Email"
                            {...register('email', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    {/* <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Status:</span>
                        </label>
                        <input
                            type="text"
                            value={"pending"}
                            placeholder="Status"
                            
                            {...register('status', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div> */}

                    {/* price */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Price:</span>
                        </label>
                        <input
                        defaultValue={selectedCourse?.price}
                            type="number"
                            placeholder="Price"
                            {...register('price', { required: true })}
                            className="input input-bordered w-full" />
                    </div>


                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">
                            Description:
                        </span>
                    </label>
                    <textarea {...register('description')} 
                    defaultValue={selectedCourse?.description}
                    className="textarea textarea-bordered h-28" placeholder="Description"></textarea>
                </div>
                {/* img */}


                <div className="form-control w-full my-6">
                    <input

                     {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button className="btn btn-primary">
                  Update
                </button>
            </form>
        </div>
    </div>

     
    
    );
};

export default TeacherMyCourseUpdate;