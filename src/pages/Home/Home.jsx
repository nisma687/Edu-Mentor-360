import Banner from "./Banner/Banner";
import Partners from "./Partners/Partners";
import PopularCourses from "./PopularCourses/PopularCourses";


const Home = () => {
    return (
        <div className="my-2">
            
            <Banner />
            <Partners />
            <PopularCourses />
        </div>
    );
};

export default Home;