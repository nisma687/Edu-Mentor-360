import { Link } from "react-router-dom";
import Tittle from "../../../component/Tittle";
import useAuth from "../../../hooks/useAuth";
// import { axiosSecure } from "../../../hooks/useAxiosSecure";
import useStudent from "../../../hooks/useStudent";
import usePayments from "../../../hooks/usePayments";
// import { useEffect } from "react";

const MyCourses = () => {
    const {student}=useStudent();
    const [payment]=usePayments();
    // console.log(payment);
    const {user}=useAuth();
    
    // console.log(student);
    const datas=payment?.filter(data=>data?.email===student?.email);
    console.log(datas);
    // const handleContinue=(id)=>{
    //     console.log(id);
    // }
    
    return (
        <div>
            <h2 className="text-xl 
            italic
            text-center">
                Hi,there
                <span className="text-purple-400 font-semibold ml-2">
                {user?.displayName} 
                </span>
               

            </h2>
            <Tittle
            subHeading={"All the courses you have enrolled in"}
             heading={"My Courses"}/>
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
                {
                    datas.map((item)=>
                    <div
                    key={item._id}
                     className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={item?.img} alt="Course Picture" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title ">
                        {item?.title}
                      </h2>
                     
                      
                        <p className="font-semibold">Posted By:
                            <span className="text-blue-600">
                            {item?.name}
                            </span>
                        </p>
                      <div className="card-actions">
                       <Link to={`/dashboard/CourseDetails/${item._id}`}>
                       <button 
                      
                       className="btn btn-primary">
                        Continue
                       </button>
                       </Link>
                      </div>
                    </div>
                  </div>

                    )
                }
        </div>
        </div>
    );
};

export default MyCourses;