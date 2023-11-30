import Swal from "sweetalert2";
import Tittle from "../../../component/Tittle";
import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Users = () => {
    const [users,refetch,isLoading]=useUsers();
    console.log(users);
    const axiosSecure=useAxiosSecure();
    if(isLoading){
        return <div className="text-center">loading...</div>;
    }


    


    const handleMakeAdmin=async(email)=>{
        console.log("change the role of",email);
        const info={
            role:"admin"
        }
      const res=await axiosSecure.patch(`/users/${email}`,info);
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
    
    return (
        <div>
            <Tittle
            subHeading={"Manage Users"}
             heading="Users" />
             <div>
            will show the requested teachers:{users.length}
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
        <th>Email</th>
        <th>Current Status</th>
        <th>Actions</th>
    

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            users.map((item,index)=><tr key={item._id}>
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
                <td>{item?.email}</td>
                
                <td>{item?.role}</td>
                <th>
                  <button 
                  onClick={()=>handleMakeAdmin(item.email)}
                  disabled={item?.role=="admin"}
                  className="btn
                  bg-green-500
                   btn-ghost btn-xs">Make Admin</button>
                </th>
                
              </tr>)
        }

    </tbody>
    
    
  </table>
</div>
            </div>
        </div>
        </div>
    );
};

export default Users;