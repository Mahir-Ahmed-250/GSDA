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

const Reviews = () => {
    SwiperCore.use([Autoplay])
    return (
        <div>
            <br />
            <br />
            <div className='elearning-heading-text container '>
                Reviews<br />
                <hr style={{ width: "50%", margin: "auto" }} />
                <>
                    <br />

                    <Swiper
                        autoplay={{ delay: 2000 }}
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
                        pagination={false}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <Card.Body >

                                <h2>Sayeed</h2>
                                <p>Nice</p>

                            </Card.Body>
                        </SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <h2>Sayeed</h2>
                            <p>Nice</p>

                        </Card.Body></SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <h2>Sayeed</h2>
                            <p>Nice</p>


                        </Card.Body></SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <h2>Sayeed</h2>
                            <p>Nice</p>


                        </Card.Body></SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <h2>Sayeed</h2>
                            <p>Nice</p>


                        </Card.Body></SwiperSlide>
                        <SwiperSlide> <Card.Body >
                            <h2>Sayeed</h2>
                            <p>Nice</p>


                        </Card.Body></SwiperSlide>
                        <SwiperSlide> <Card.Body >

                            <h2>Sayeed</h2>
                            <p>Nice</p>

                        </Card.Body></SwiperSlide>

                    </Swiper>
                </>
            </div>
        </div >
    );
};

export default Reviews;







