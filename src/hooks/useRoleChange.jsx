import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useRoleChange = () => {
    const axiosSecure=useAxiosSecure();
    const [role,setRole]=useState("");
    useEffect(() => {
        const res=axiosSecure.get('/teacherRequest');
        console.log(res.data);
       if(res.data){
        const filter=res.data.filter((item)=>item.status==="Approved");
        console.log(filter);
        filter.forEach(async(item)=>{
            const info={
                role:"teacher"
            }
            const res=await axiosSecure.patch(`/users/${item.email}`,info);
            console.log(res.data);
            setRole(res.data);
        })
       }
        
    }, [axiosSecure]);
    
    return [role];
};

export default useRoleChange;