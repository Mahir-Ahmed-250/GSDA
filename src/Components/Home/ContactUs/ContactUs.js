import React from 'react';
import { Button } from 'react-bootstrap';
import img from './contact1.png';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <section className="container">
                <h2 className="elearning-heading-text ">Contact Us</h2>
                <hr style={{ width: "50%", margin: "auto" }} />
                <p className="text-center w-responsive mx-auto">Feel Free to Contact With Us!</p>
                <div className="row">
                    <div className="col-md-4">
                        <img className='contact-img' src={img} alt="" />
                    </div>
                    <div className="col-md-8 mt-5">
                        <form id="contact-form" className=' mx-auto' name="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" placeholder='Your Name' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" placeholder='Your Email' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mt-4">
                                        <input type="text" id="subject" name="subject" className="form-control" placeholder='Your Number' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mt-4">
                                        <textarea placeholder='Your Message' type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-md-left mt-4">
                                <Button className='w-50'>Send</Button>
                            </div>
                        </form>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactUs;








