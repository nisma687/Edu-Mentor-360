import useAuth from "./useAuth";
import useCourse from "./useCourse";


const useTeachMyCourse = () => {
    const [course]=useCourse();
    const {user}=useAuth();
    console.log(user.email);
    // console.log(course);
    const selectedCourse=course.filter(item=>item.status==="Approved");
    // console.log(selectedCourse);
    const teacherCourse=selectedCourse.filter(item=>item.email===user?.email);
    // console.log(teacherCourse);
    return [teacherCourse];
};

export default useTeachMyCourse;