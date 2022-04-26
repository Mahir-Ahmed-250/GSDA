import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './ELearningCourses.css';
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import ELearningCourse from "../E-learningCourse/ELearningCourse";

const ELearningCourses = () => {
    SwiperCore.use([Autoplay])
    const [eLearningCourses, setElearningCourses] = useState([]);
    useEffect(() => {
        fetch('https://globalskills.com.bd/api/e-learning/courses')
            .then(res => res.json())
            .then(data => setElearningCourses(data))
    }, [])
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='elearning-heading-text container '>
                E-Learning Courses <br />
                <hr style={{ width: "50%", margin: "auto" }} />
                <>
                    <br />
                    <Swiper
                        autoplay={{ delay: 3000 }}
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            eLearningCourses.map(eLearningCourses =>
                                <SwiperSlide>
                                    <ELearningCourse key={eLearningCourses.id} eLearningCourses={eLearningCourses}>
                                    </ELearningCourse>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </>
            </div>
        </div >
    );
};

export default ELearningCourses;
