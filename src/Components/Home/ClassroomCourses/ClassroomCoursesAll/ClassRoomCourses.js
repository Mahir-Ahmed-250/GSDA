import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './ClassRoomCourses.css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import { useEffect, useState } from "react";
import ClassRoomCourse from "../ClassRoomCourse/ClassRoomCourse";


const ClassRoomCourses = () => {
    SwiperCore.use([Autoplay])
    const [classroomCourses, setClassroomCourses] = useState([]);

    useEffect(() => {
        fetch('https://globalskills.com.bd/api/classroom/courses')
            .then(res => res.json())
            .then(data => setClassroomCourses(data))
    }, [])
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='classroom-heading-text container'>
                Classroom Courses
                <hr style={{ width: "50%", margin: "auto" }} />
                <>
                    <br />
                    <Swiper
                        autoplay={{ delay: 4000 }}
                        slidesPerView={3}
                        spaceBetween={40}
                        slidesPerGroup={2}
                        loop={true}
                        navigation={true}
                        modules={[Navigation]}>
                        {
                            classroomCourses.map(classroomCourses =>
                                <SwiperSlide>
                                    <ClassRoomCourse key={classroomCourses.id} classroomCourses={classroomCourses}>
                                    </ClassRoomCourse>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default ClassRoomCourses;


