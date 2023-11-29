import useStudent from "../../../hooks/useStudent";


const MyCourses = () => {
    const {student}=useStudent();
    console.log(student);
    return (
        <div>
            
        </div>
    );
};

export default MyCourses;