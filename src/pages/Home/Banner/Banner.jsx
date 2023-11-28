
import img from "../../../assets/img/EduMentor360.jpg";
import { FaRegSmileBeam } from "react-icons/fa";
const Banner = () => {
    return (
        <div className=" mb-2 mt-2">
          <div className="hero
            
             text-white 
             font-semibold italic
             min-h-screen
          w-full h-[600px]
            bg-cover bg-center" style=
            
            {{backgroundImage:`url(${img})`}}
            >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there <FaRegSmileBeam className="inline-block text-5xl"/>
      </h1>
      <p className="mb-5">
        Welcome to EduMentor360. We are a team of dedicated individuals who are
        working to make education accessible to everyone.Our mission is to provide best quality education to everyone.Our platform is designed to provide best learning experience to our students also we provide best teaching experience to our teachers.

      </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;