
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
const useCount = () => {
    const axiosPublic=useAxios();
    const {data:value=[]}=useQuery({
        queryKey:["count"],
        queryFn:async()=>{
            const res=await axiosPublic.get("/count");
            return res.data;
        },
    
    })

    return [value];
};

export default useCount;