import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useTeacher = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const {data:teacher=[],refetch}=useQuery({
        queryKey:["requestsTeacher",user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/teacherRequest/${user?.email}`);
            return res.data;

        }
       
    
    })
    return [teacher,refetch];
};

export default useTeacher;