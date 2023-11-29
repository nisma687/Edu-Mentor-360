import Swal from "sweetalert2";
import useCourse from "../../../hooks/useCourse";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const CourseRequest = () => {
    const [course,refetch]=useCourse();
    const axiosSecure=useAxiosSecure();
    const handleApprove=async(id)=>{
        console.log("approve",id);
        const info={
            status:"Approved"
        }
      const res=await axiosSecure.patch(`/addCourseRequest/${id}`,info);
        console.log(res.data);
        if(res.data.modifiedCount){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Approval Done Successfully",
                showConfirmButton: false,
                timer: 1500
              });

        }


    }



    const handleReject=async(id)=>{
        console.log("reject",id);
        const info={
            status:"Rejected"
        }
      const res=await axiosSecure.patch(`/addCourseRequest/${id}`,info);
        console.log(res.data);
        if(res.data.modifiedCount){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Rejection Done Successfully",
                showConfirmButton: false,
                timer: 1500
              });

        }
       
        
        

    }

    return (
        <div>
            will show the requested courses:{course.length}
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Image</th>
        <th>Course Title</th>
        <th>Name </th>
        <th>Email</th>
        <th>Price</th>
        <th>Description</th>
        <th>Status</th>
        <th>Actions</th>
        <th>Actions</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            course.map((item,index)=><tr key={item._id}>
                <th>
                  {index+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item?.img} />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                    <span className="text-sm font-semibold">{item?.title}</span>
                  
                </td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.price}</td>
                <td>{item?.description}</td>
                <td>{item?.status}</td>
                <th>
                  <button 
                  onClick={()=>handleApprove(item._id)}
                  disabled={item?.status==="Approved"}
                  className="btn
                  bg-green-500
                   btn-ghost btn-xs">Approve</button>
                </th>
                <th>
                  <button 
                    onClick={()=>handleReject(item._id)}
                    disabled={item?.status==="Rejected"}
                    
                  className="btn 
                    bg-red-700
                  btn-ghost btn-xs">Reject</button>
                </th>
                <th>
                 <Link to={`/courseDetails/${item._id}`}>
                 <button 
                    disabled={item?.status==="Rejected" 
                    || item?.status==="Pending"}
                    
                  className="btn 
                    bg-blue-500
                  btn-ghost btn-xs">See Progress</button>
                 </Link>
                </th>
              </tr>)
        }

    </tbody>
    
    
  </table>
</div>
            </div>
        </div>
    );
};

export default CourseRequest;