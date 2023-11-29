import Tittle from "../../../component/Tittle";
import useCount from "../../../hooks/useCount";
import img from "../../../assets/img/user.jpg";


const OurTotalUsers = () => {
    const [count]=useCount();

    // console.log(count);
    return (
        <div className="mt-2 mb-2">
            <Tittle heading={"Our Total Users"} 
            subHeading={"you can see the total number of users in our website"}
             />
             <div className="flex justify-center items-center ">
        <div className="w-1/2 "> 
        <div className="card w-96 p-10
            bg-gradient-to-r from-purple-500 to-blue-500 hover:from-violet-300 hover:to-blue-400
             shadow-xl">
            <div className="card-body italic items-center text-center ">
                <h2 className="card-title font-bold ">
                    Total Users:<span className="text-2xl
                     text-white">{count.userCount}</span>
                </h2>
                <h2 className="card-title font-bold">
                    Total Courses:<span className="text-2xl text-white">{count.classCount}</span>
                </h2>
                <h2 className="card-title font-bold">
                    Total Enrollment:<span className="text-2xl text-white">{count.paymentCount}</span>
                </h2>  
            </div>
            </div>
</div>
                <div  className="w-1/2">
                    <img 
                   
                    src={img} alt="" />

                </div>
             </div>
        </div>
    );
};

export default OurTotalUsers;