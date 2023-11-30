import axios
 from "axios";
 export const axiosPublic= axios.create({
    baseURL:"https://edu-mentor360-server.vercel.app",
    

});
const useAxios = () => {
    return axiosPublic;
 };
 
 export default useAxios; 