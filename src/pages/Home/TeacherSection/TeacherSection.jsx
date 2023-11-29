import Tittle from "../../../component/Tittle";
import image from "../../../assets/img/teacher.png";
import { Link } from "react-router-dom";

const TeacherSection = () => {
    return (
        <div className="my-5">
            <Tittle
            className="mt-4"
            heading="Want to be a Teacher??"
            subHeading="We are always looking for talented teachers to join our team."
            ></Tittle>

            <div className="flex mt-2 ">
                <div className="">
                    <img 
                    className="
                    border-2 border-purple-500 p-4
                    rounded-xl bg-slate-300
                    "
                    src={image} alt="teacher" />
                </div>
                <div className="
                w-1/2 p-6 
                    ml-4
                 ">
                    <h1 className="text-2xl
                    italic
                     font-semibold">

                        Become a Teacher</h1>
                    <p className="text-lg 
                    italic mt-5
                    text-purple-500 font-semibold">
                        We are always looking for talented teachers to join our team.
                        If you are interested in teaching with us, please send your CV to and other details to us.By becoming a teacher with us, you will be able to reach out to a large number of students and help them learn.
                    </p>
                   <Link to="/teachOnEduMentor">
                    <button className="btn btn-primary mt-4">Apply Now</button>
                   </Link>
                </div>


            </div>
            

        </div>
    );
};

export default TeacherSection;