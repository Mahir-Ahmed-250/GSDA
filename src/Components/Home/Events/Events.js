import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import { Card } from 'react-bootstrap';


const Events = () => {
    SwiperCore.use([Autoplay])
    return (
        <div>
            <br />
            <br />
            <div className='elearning-heading-text container '>
                Events <br />
                <hr style={{ width: "50%", margin: "auto" }} />
                <>
                    <br />

                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={false}
                        slidesPerView={"3"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 10,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <Card.Body >

                                <img src="https://www.globalskills.com.bd/storage/courses/1647242736_1643872118_PRINCE2__logo_.png_700,430.png" alt="" />
                                <p>Prince 2</p>

                            </Card.Body>
                        </SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <img src="https://www.globalskills.com.bd/storage/courses/1647242736_1643872118_PRINCE2__logo_.png_700,430.png" alt="" />
                            <p>Prince 2</p>

                        </Card.Body></SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <img src="https://www.globalskills.com.bd/storage/courses/1647242736_1643872118_PRINCE2__logo_.png_700,430.png" alt="" />
                            <p>Prince 2</p>

                        </Card.Body></SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <img src="https://www.globalskills.com.bd/storage/courses/1647242736_1643872118_PRINCE2__logo_.png_700,430.png" alt="" />
                            <p>Prince 2</p>

                        </Card.Body></SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <img src="https://www.globalskills.com.bd/storage/courses/1647242736_1643872118_PRINCE2__logo_.png_700,430.png" alt="" />
                            <p>Prince 2</p>

                        </Card.Body></SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <img src="https://www.globalskills.com.bd/storage/courses/1647242736_1643872118_PRINCE2__logo_.png_700,430.png" alt="" />
                            <p>Prince 2</p>

                        </Card.Body></SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <img src="https://www.globalskills.com.bd/storage/courses/1647242736_1643872118_PRINCE2__logo_.png_700,430.png" alt="" />
                            <p>Prince 2</p>

                        </Card.Body></SwiperSlide>

                    </Swiper>
                </>
            </div>
        </div >
    );
};

export default Events;


