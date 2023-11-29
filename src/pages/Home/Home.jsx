import Banner from "./Banner/Banner";
import CarrerGuidelines from "./CarrerGuidelines/CarrerGuidelines";
import NewsSection from "./NewsSection/NewsSection";
import OurTeam from "./OurTeam/OurTeam";
import OurTotalUsers from "./OurTotalUsers/OurTotalUsers";
import Partners from "./Partners/Partners";
import PopularCourses from "./PopularCourses/PopularCourses";
import TeacherSection from "./TeacherSection/TeacherSection";


const Home = () => {
    return (
        <div className="my-2">
            
            <Banner />
            <Partners />
            <PopularCourses />
            <OurTotalUsers />
            <TeacherSection />
            <NewsSection />
            <OurTeam/>
            <CarrerGuidelines />
        </div>
    );
};

export default Home;