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


    const handleApprove=async(email,id)=>{
        console.log("approve",email,id);
        const info={
            role:"teacher",
        }
      const res=await axiosSecure.patch(`/users/${email}`,info);
        console.log(res.data);
        if(res.data.modifiedCount)
        {
          const inform={
            status:"Approved"
          }
          const res2=await axiosSecure.patch(`/teacherRequest/${id}`,inform);
            console.log(res2.data);
            if(res2.data.modifiedCount){
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
            confirmButtonText: "Yes, reject it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const info={
                    status:"Rejected"
                }
                const res=await axiosSecure.patch(`/teacherRequest/${id}`,info);
                console.log(res.data);
                if(res.data.modifiedCount){
                    refetch();
                    Swal.fire({
                        title: "Rejected!",
                        text: "This request has been rejected.",
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
                  onClick={()=>handleApprove(item.email,item._id)}
                  disabled={item?.status==="Approved"|| item?.status==="Rejected"}
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