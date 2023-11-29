import useCourse from "../../hooks/useCourse";
import Tittle from "../../component/Tittle";
import { Link } from "react-router-dom";


const AllClasses = () => {
    const [course]=useCourse();
    console.log(course);
    const selectedCourse=course.filter(item=>item.status==="Approved");
    return (
        <div className="my-12">
            <Tittle
            heading="All the Available Courses"
            subHeading="what are you waiting for? Enroll now!"
            ></Tittle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    selectedCourse.map((item)=>
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
                      <p
                        className=" text-purple-600 font-semibold"
                      >Price:
                        <span className="text-blue-600">
                        ${item?.price}
                        </span>
                        </p>
                        <p
                        className="text-xl text-purple-600"
                        >{item?.description}</p>
                        <p className="font-semibold">Posted By:
                            <span className="text-blue-600">
                            {item?.name}
                            </span>
                        </p>
                      <div className="card-actions">
                       <Link to={`/courseDetails/${item?._id}`} >
                       <button className="btn btn-primary">Enroll</button>
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

export default AllClasses;