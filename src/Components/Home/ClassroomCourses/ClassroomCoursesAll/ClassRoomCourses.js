// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './ClassRoomCourses.css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card } from "react-bootstrap";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';


const ClassRoomCourses = () => {
    SwiperCore.use([Autoplay])
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
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Card >
                                <Card.Body>
                                    <img src="https://www.globalskills.com.bd/storage/courses/1647242736_1643872118_PRINCE2__logo_.png_700,430.png" alt="" />
                                    <p>Prince 2</p>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide><Card >
                            <Card.Body>
                                <img src="https://www.globalskills.com.bd/storage/courses/1647242849_1643286433_CCSP_Image.png" alt="" />
                                <p>Prince 2</p>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide><Card >
                            <Card.Body>
                                <img src="https://www.globalskills.com.bd/storage/courses/1647242816_1647242372_1634458200_aws700_430_psd.jpg" alt="" />
                                <p>Prince 2</p>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide>  <Card.Body>
                            <img src="https://www.globalskills.com.bd/storage/courses/1647242816_1647242372_1634458200_aws700_430_psd.jpg" alt="" />
                            <p>Prince 2</p>
                        </Card.Body></SwiperSlide>
                        <SwiperSlide>  <Card.Body>
                            <img src="https://www.globalskills.com.bd/storage/courses/1647242816_1647242372_1634458200_aws700_430_psd.jpg" alt="" />
                            <p>Prince 2</p>
                        </Card.Body></SwiperSlide>
                        <SwiperSlide>  <Card.Body>
                            <img src="https://www.globalskills.com.bd/storage/courses/1647242816_1647242372_1634458200_aws700_430_psd.jpg" alt="" />
                            <p>Prince 2</p>
                        </Card.Body></SwiperSlide>
                        <SwiperSlide>  <Card.Body>
                            <img src="https://www.globalskills.com.bd/storage/courses/1647242816_1647242372_1634458200_aws700_430_psd.jpg" alt="" />
                            <p>Prince 2</p>
                        </Card.Body></SwiperSlide>
                        <SwiperSlide>  <Card.Body>
                            <img src="https://www.globalskills.com.bd/storage/courses/1647242816_1647242372_1634458200_aws700_430_psd.jpg" alt="" />
                            <p>Prince 2</p>
                        </Card.Body></SwiperSlide>
                        <SwiperSlide>  <Card.Body>
                            <img src="https://www.globalskills.com.bd/storage/courses/1647242816_1647242372_1634458200_aws700_430_psd.jpg" alt="" />
                            <p>Prince 2</p>
                        </Card.Body>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default ClassRoomCourses;


