import Banner from "./Banner/Banner";
import Partners from "./Partners/Partners";
import PopularCourses from "./PopularCourses/PopularCourses";
import TeacherSection from "./TeacherSection/TeacherSection";


const Home = () => {
    return (
        <div className="my-2">
            
            <Banner />
            <Partners />
            <PopularCourses />
            <TeacherSection />
        </div>
    );
};

export default Home;