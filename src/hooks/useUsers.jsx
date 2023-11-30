import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import useRoleChange from "./useRoleChange";


const useUsers = () => {
    // const [role]=useRoleChange();
    // console.log(role);
    const axiosSecure=useAxiosSecure();
    const {data:users=[],refetch,isLoading}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
          const res=  await axiosSecure.get('/users');
            return res.data;
        }

    
    })
    return [users,refetch,isLoading];
};

export default useUsers;