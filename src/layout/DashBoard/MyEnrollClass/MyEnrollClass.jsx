import { useLoaderData, useParams } from "react-router-dom";
import usePayments from "../../../hooks/usePayments";
import Tittle from "../../../component/Tittle";


const MyEnrollClass = () => {
    // const data=useLoaderData();
    // console.log(data.data);
    const data=useParams();
    // console.log(data.id);
    const [payment]=usePayments();
    // console.log(payment);
    const filterData=payment.filter((item)=>item._id===data.id);
    console.log(filterData);
    return (
        <div>
              <Tittle
            subHeading={"Learn everyday and get better everyday"}
             heading={"Course Details of your Enrolled class"}/>
                      <div className="flex justify-center">
                {
                    filterData.map((item)=>
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
                     
                      
                        <p className="font-semibold">
                            <span className="text-blue-600">
                            {item?.description}
                            </span>
                        </p>
                      
                        <p className="font-semibold">Date of purchase:
                            <span className="text-blue-600">
                            {item?.date}
                            </span>
                        </p>
                      
                        <p className="font-semibold">Deadline:
                            <span className="text-blue-600">
                           
                            </span>
                        </p>
                       
                        <p className="font-semibold">Posted By:
                            <span className="text-blue-600">
                            {item?.name}
                            </span>
                        </p>
                        <button className="btn btn-primary">
                            Submit
                        </button>
                      
                    </div>
                  </div>

                    )
                }
        </div>
        </div>
    );
};

export default MyEnrollClass;