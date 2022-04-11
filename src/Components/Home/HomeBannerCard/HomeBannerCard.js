import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeBannerCard.css'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
const HomeBannerCard = () => {
    return (
        <div className="container ">
            <br />
            <br />

            <h2 className='journey-text'>Lets Start the Journey</h2>
            <hr />
            <div className='mt-5'>
                <div className="row">
                    <div className="col-lg-4">
                        <Card className='home-banner-card'>
                            <Card.Body>   <img className='elearning-icon' src={img1} alt="" /> <span className='elearning-text'>E-LEARNING</span></Card.Body>
                        </Card>
                    </div>

                    <div className="col-lg-4"
                    >
                        <Card className='home-banner-card'>
                            <Card.Body> <img className='classroom-icon' src={img2} alt="" /><span className='classroom-text'>CLASSROOM</span></Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className='home-banner-card'>
                            <Card.Body><img className='exam-icon' src={img3} alt="" /><span className='exam-text'>PRACTICE EXAM</span></Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBannerCard;