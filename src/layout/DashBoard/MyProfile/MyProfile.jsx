import Tittle from "../../../component/Tittle";
import useAuth from "../../../hooks/useAuth";
import useUsers from "../../../hooks/useUsers";


const MyProfile = () => {
const {user}=useAuth();
const [users]=useUsers();
const userRole=users.filter((item)=>item.email===user?.email);
// console.log(userRole);
const role=userRole[0]?.role;
console.log(role);
    return (
        <div>
            <Tittle heading={"My Profile"} subHeading={"My Profile details"}/>
            <div className="mt-3 mb-2 p-10">
                <div className="flex justify-center">
                    <img className="w-40 h-40 rounded-full" src={user?.photoURL} alt="" />
                </div>
                <div className="mt-3">
                    <div className="flex justify-between">
                        <div className="text-gray-500
                            font-bold
                        ">Name:</div>
                        <div className="text-gray-700 font-semibold">{user?.displayName}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500 font-bold">Email:</div>
                        <div className="text-gray-700 font-semibold">{user?.email}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500 font-bold">Role:</div>
                        <div
                         className="text-gray-700 font-semibold">
                            {role}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500 font-bold">Phone:</div>
                        <div
                         className="text-gray-700 font-semibold">
                            {"+91 1234567890"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;