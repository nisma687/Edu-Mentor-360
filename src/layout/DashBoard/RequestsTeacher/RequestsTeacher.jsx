import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const RequestsTeacher = () => {
    // const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const {data:request=[],isLoading,refetch}=useQuery({
        queryKey:["requestsTeacher"],
        queryFn:async()=>{
            const res=await axiosSecure.get("/teacherRequest");
            return res.data;

        }

    });

    if(isLoading){
        return <div className="text-center">loading...</div>;
    }


    const handleApprove=async(id)=>{
        console.log("approve",id);
        const info={
            status:"Approved"
        }
      const res=await axiosSecure.patch(`/teacherRequest/${id}`,info);
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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res=await axiosSecure.delete(`/teacherRequest/${id}`);
                console.log(res.data);
                if(res.data.deletedCount){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
        
                }
             
            }
          });
        
        

    }




    return (
        <div>
            will show the requested teachers:{request.length}
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Experience</th>
        <th>Title</th>
        <th>Category</th>
        <th>Status</th>
        <th>Actions</th>
        <th>Actions</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            request.map((item,index)=><tr key={item._id}>
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
                    <span className="text-sm font-semibold">{item?.name}</span>
                  
                </td>
                <td>{item?.experience}</td>
                <td>{item?.title}</td>
                <td>{item?.category}</td>
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
                    disabled={item?.status==="Rejected"}
                    onClick={()=>handleReject(item._id)}
                  className="btn 
                    bg-red-700
                  btn-ghost btn-xs">Reject</button>
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

export default RequestsTeacher;