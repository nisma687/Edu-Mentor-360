
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    if(user){
        return children;
    }
    if(loading){
        return <div 
        className="text-center">Loading...</div>
    }
    if(!user){
        return <Navigate to={{
            pathname:"/signIn",
            state:{from:location}
        }}/>
    }
       
    
    
    
};

export default PrivateRoute;