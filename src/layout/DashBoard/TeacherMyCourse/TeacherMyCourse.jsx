import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useCourse from "../../../hooks/useCourse";
import Tittle from "../../../component/Tittle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const TeacherMyCourse = () => {
    const [course]=useCourse();
    const {user}=useAuth();
    console.log(user.email);
    console.log(course);
    const selectedCourse=course.filter(item=>item.status==="Approved");
    const axiosSecure=useAxiosSecure();
    console.log(selectedCourse);
    const teacherCourse=selectedCourse.filter(item=>item.email===user?.email);
    console.log(teacherCourse);
    const handleDelete=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, reject it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            
            const res=await  axiosSecure.delete(`/addCourseRequest/${id}`)
            console.log(res.data);
            if(res.data.deletedCount){
                
                Swal.fire({
                    title: "Rejected!",
                    text: "This request has been rejected.",
                    icon: "success"
                  });
                  window.location.reload();
    
            }
            else{
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong",
                    icon: "error"
                  });
            }
         
        }
      });




      


    }
    return (
        <div>
        <h2 className="text-xl 
        italic
        text-center">
            Hi,there
            <span className="text-purple-400 font-semibold ml-2">
            {user?.displayName} 
            </span>
           

        </h2>
        <Tittle
        subHeading={"All the courses you have enrolled in"}
         heading={"My Courses"}/>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
            {
                teacherCourse.map((item)=>
               <div  key={item._id}>
             <form>
             <div
               
               className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={item?.img} alt="Course Picture" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title ">
                  {item?.title}
                </h2>
               
                
                  <p className="font-semibold">Email :
                      <span className="text-blue-600">
                      {item?.email}
                      </span>
                  </p>
                  <p className="font-semibold"> 
                  Price:
                      <span className="text-blue-600">
                      {item?.price}
                      </span>
                  </p>
                  <p className="font-semibold">Description:
                      <span className="text-blue-600">
                      {item?.description}
                      </span>
                  </p>
                  <p className="font-semibold">Status
                      <span className="text-blue-600">
                        {item?.status?item?.status:"Pending"}
                      </span>
                  </p>
                  <p className="font-semibold">Posted By:
                      <span className="text-blue-600">
                      {item?.name}
                      </span>
                  </p>
                <div className="card-actions">
                 
                 <Link to={`/dashboard/teacher/myCourses/${item._id}`} >
                 <button 
                
                 className="btn btn-primary">
                    Update
                 </button>
                 </Link>
                 <Link >
                 <button 
                  onClick={()=>handleDelete(item._id)}
                 className="btn btn-primary">
                    Delete
                 </button>
                 </Link>
                 <Link>
                 <button 
                    disabled={item?.status==="Pending"?true:false}
                 className="btn btn-primary">
                  See Details
                 </button>
                 </Link>
                </div>
              </div>
            </div>
             </form>
               </div>

                )
            }
    </div>
    </div>
    );
};

export default TeacherMyCourse;