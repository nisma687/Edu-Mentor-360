import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";




const usePayments = () => {
    // const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const {data:payment=[],refetch}=useQuery({
        queryKey:["payments"],
        queryFn:async()=>{
            const res=await axiosSecure.get('/payments');
            // console.log(res.data);
            return res.data;
            


        }
       
    
    })
    return [payment,refetch];
};

export default usePayments;