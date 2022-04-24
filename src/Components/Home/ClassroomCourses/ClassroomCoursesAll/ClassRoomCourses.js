// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './ClassRoomCourses.css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import { useEffect, useState } from "react";
import ClassRoomCourse from "../ClassRoomCourse/ClassRoomCourse";
import { Card } from "react-bootstrap";


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
                        slidesPerView={4}
                        spaceBetween={20}
                        slidesPerGroup={2}
                        loop={true}
                        loopFillGroupWithBlank={false}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >


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


