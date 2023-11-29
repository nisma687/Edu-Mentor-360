import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";



const useStudent = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const [student,setStudent]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axiosSecure.get(`/payments/${user?.email}`)
        .then(res=>{
            // console.log(res.data);
            setStudent(res.data);
            setLoading(false);
            const userinfo={
                role:"student",
            }
            axiosSecure.patch(`/users/${user?.email}`,userinfo)
            .then(res=>{
                // console.log(res.data);
                
            })
            .catch(err=>{
                console.log(err);
            })
        })
        .catch(err=>{
            console.log(err);
            setLoading(false);
        })
    },[ axiosSecure,user.email])
    return {student,loading};
};

export default useStudent;