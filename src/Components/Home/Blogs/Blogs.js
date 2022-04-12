
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { Card } from "react-bootstrap";


const Blogs = () => {
    return (

        <div className='elearning-heading-text container '>
            Blogs <br />
            <hr style={{ width: "50%", margin: "auto" }} />
            <>
                <Swiper
                    slidesPerView={3}
                    centeredSlides={false}
                    spaceBetween={20}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}

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

                </Swiper>
            </>

        </div>
    );
};

export default Blogs;
