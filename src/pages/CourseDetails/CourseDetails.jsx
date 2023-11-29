import { Link, useLoaderData } from "react-router-dom";
import Tittle from "../../component/Tittle";
// import useCourseDetails from "../../hooks/useCourseDetails";



const CourseDetails = () => {
    const data=useLoaderData();
    // const pay=useCourseDetails(data?.data?._id);
    // console.log(pay);
    // const handlePayment=(id)=>{
    //     console.log(id);
      
    // }
    console.log(data.data);
    return (
        <div>
            <Tittle heading="Course Details Page" subHeading="Click pay button for enrolling"></Tittle> 
            <div className="my-8 ">
            <div className=" flex justify-center">
                <img
                className="p-5 border-2
                    bg-purple-100
                 border-purple-600 rounded-lg"
                 src={data?.data?.img} alt="" />
            </div>
            <div className="flex items-center p-5">
            <div className="card-body items-center text-center">
                      <h2 className="card-title italic">
                       Name of the course: 
                       <span className="font-semibold text-purple-500">
                       {data?.data?.title}
                       </span>
                      </h2>
                      <p
                        className="  font-semibold"
                      >Price:
                        <span className="text-purple-600">
                        ${data?.data?.price}
                        </span>
                        </p>
                      <p
                        className="  font-semibold"
                      >Description:
                      <br/>
                        <span className="text-purple-600 italic">
                        {data?.data?.description}
                        </span>
                        </p>

                        <p
                        className="text-xl text-purple-600"
                        ></p>
                        <p className="font-semibold">Posted By:
                            <span className="text-blue-600 italic">
                           {data?.data?.name}
                            </span>
                        </p>

                        <Link to={`/payment/${data?.data?._id}`}>
                        <button className="btn btn-primary">
                            Pay
                        </button>
                        </Link>
                     
                    </div>
            </div>
            </div>
        </div>

    );
};

export default CourseDetails;