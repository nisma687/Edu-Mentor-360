import img1 from "../../../assets/img/man1.jpg";
import img2 from "../../../assets/img/man2.jpg";
import img3 from "../../../assets/img/woman1.jpg";
import img4 from "../../../assets/img/woman2.jpg";

import Tittle from "../../../component/Tittle";

const OurTeam = () => {
    return (
        <div className="mt-2 mb-2">
            <Tittle heading={"Our Team"} 
            subHeading={"Most dedicated and professional team members"}
             />
            
            <div className="flex justify-center items-center">
                <div className="w-1/2">
                <div className="grid gap-3  lg:grid-cols-2">
                    <img className="border
                    p-2 border-blue-950 rounded-full
                     border-x-4 border-y-4" src={img1} alt="" />
                    <img className="border
                    p-2 border-blue-950 rounded-full
                     border-x-4 border-y-4" src={img2} alt="" />
                    <img className="border
                    p-2 border-blue-950 rounded-full
                     border-x-4 border-y-4" src={img3} alt="" />
                    <img className="border
                    p-2 border-blue-950 rounded-full
                     border-x-4 border-y-4" src={img4} alt="" />

                </div>
                </div>
                <div className="w-1/2 ml-4">
                    <div>
                        <p className="text-xl font-semibold text-blue-600 italic">
                            Meet our dedicated team members who are always ready to help you. Our team members are very friendly and extremely dedicated and professional. From the beginning of our journey, we have been working with a team of highly skilled and experienced professionals who are always ready to help you.So if you have any questions or need any help, please feel free to contact us. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;