import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCourseDetails = (id) => {
    const axiosSecure=useAxiosSecure();
    const {data:course=[],refetch}=useQuery({
        queryKey:["requestsTeacher"],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/addCourseRequest/${id}`);
            return res.data;

        }
       
     
    });
    return [course,refetch];
};

export default useCourseDetails;