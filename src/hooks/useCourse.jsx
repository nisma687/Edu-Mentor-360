import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCourse = () => {
    const axiosSecure=useAxiosSecure();
    const {data:course=[],refetch}=useQuery({
        queryKey:["requestsTeacher"],
        queryFn:async()=>{
            const res=await axiosSecure.get('/addCourseRequest');
            return res.data;

        }
       
     
    });
    return [course,refetch];
};

export default useCourse;