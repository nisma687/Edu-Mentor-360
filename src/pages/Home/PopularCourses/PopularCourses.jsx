import Tittle from "../../../component/Tittle";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img1 from "../../../assets/img/web .png";
import img2 from "../../../assets/img/reactjs.png";
import img3 from "../../../assets/img/reactjssssssssssss.jpg";
import { SiReact } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { MdOutlineDeveloperMode } from "react-icons/md";

const PopularCourses = () => {
    return (
        <div className="mt-5 mb-5">
            <Tittle 
            subHeading="Learn new skills online with top educators from around the world."
            heading="Popular Courses" />
            <div className=" mx-auto  p-15 w-3/4 ">
            <AwesomeSlider className="!block ">
            
            <div data-src={img1} />
            <div data-src={img2} />
            <div data-src={img3} />
           
            </AwesomeSlider>

            </div>
            <div className="mt-2">
                <h2 className="text-center font-bold text-xl">
                    <br />
                    <br />
                   <span className="text-blue-500"> Name of the courses are:</span>
                </h2>
            <p className="text-center italic text-xl font-semibold mt-5">
                <MdOutlineDeveloperMode className="inline-block text-2xl" />
                Web Development
                </p>
            <p className="text-center italic text-xl font-semibold mt-5">
                <SiReact className="inline-block text-2xl" />
                React JS
                </p>
            <p className="text-center italic text-xl font-semibold mt-5">
                <IoLogoReact className="inline-block text-2xl" />
                React JS 2
                </p>
            </div>
        </div>
    );
};

export default PopularCourses;