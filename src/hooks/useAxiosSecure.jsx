import axios
 from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure= axios.create({
    baseURL:"https://edu-mentor360-server.vercel.app",
    

});
const useAxiosSecure = () => {
      // request interceptors to add authorization header for every secure call to the api
      const navigate=useNavigate();
      const {logOut}=useAuth();
      axiosSecure.interceptors.request.use(function (config) {
          const token=localStorage.getItem('access-token');
        
          config.headers.authorization=`Bearer ${token}`;
         
          return config;
        }, function (error) {
      
          return Promise.reject(error);
        });
     
          axiosSecure.interceptors.response.use(function (response) {
             
            
              
              return response;
          }, async(error)=> {
            
              const status=error.response.status;
              console.log('status error stopped by interceptors',status);
             
              if(status===401 || status===403)
              {
                  await logOut();
                  navigate('/signIn');
                  
              }
              return Promise.reject(error);
          });
   return axiosSecure;
};

export default useAxiosSecure;