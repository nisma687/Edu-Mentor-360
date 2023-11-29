import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Tittle from "../../../component/Tittle";

const NewsSection = () => {
    return (
        <div className="mt-2 mb-2">
            <Tittle
                subHeading={"Stay Focus on Our Website"}
             heading={"Exciting News"} />
                <div className="flex">
            
            <button className="btn btn-primary">Coming soon</button>
            <Marquee pauseOnHover={true} speed={100}>
            <Link className="mr-12" to="/">
            <p className=" font-semibold italic text-purple-600">Exciting News EveryOne we are Opening our very Fast YouTube Channel ......</p>
            </Link>
            <Link className="mr-12" to="/">
            <p className=" font-semibold italic text-purple-600">
             Where You will be able to do Courses for free ......
             </p>
            </Link>
            <Link className="mr-12" to="/">
            <p className=" font-semibold italic text-purple-600">
            Stay Focus on Our Website page for more updates.......
            </p>
            </Link>
            </Marquee>
            
        </div>
        </div>
    );
};

export default NewsSection;