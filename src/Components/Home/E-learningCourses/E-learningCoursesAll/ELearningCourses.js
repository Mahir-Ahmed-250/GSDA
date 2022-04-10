import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import "swiper/css/pagination";
import "swiper/css/navigation";
import './ELearningCourses.css';
import { Card } from "react-bootstrap";
import { Pagination, Navigation } from "swiper";

const ELearningCourses = () => {
    return (
        <div>
            <div className='elearning-heading-text container'>
                E-Learning Courses
                <>
                    <Swiper
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
                        <SwiperSlide><Card className='home-banner-card'>
                            <Card.Body>
                                <span className='elearning-text'>E-LEARNING</span>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide><Card className='home-banner-card'>
                            <Card.Body>
                                <span className='elearning-text'>E-LEARNING</span>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide><Card className='home-banner-card'>
                            <Card.Body>
                                <span className='elearning-text'>E-LEARNING</span>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide><Card className='home-banner-card'>
                            <Card.Body>
                                <span className='elearning-text'>E-LEARNING</span>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide><Card className='home-banner-card'>
                            <Card.Body>
                                <span className='elearning-text'>E-LEARNING</span>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide><Card className='home-banner-card'>
                            <Card.Body>
                                <span className='elearning-text'>E-LEARNING</span>
                            </Card.Body>
                        </Card></SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div >
    );
};

export default ELearningCourses;
