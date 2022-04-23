import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from './registration.png';

const Registration = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };
    return (
        <div className='container'>
            <section class="login-form">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img className='login-img' src={img}
                                alt="" />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">



                            <div class="divider d-flex align-items-center my-4">
                                <h1 class="text-center fw-bold mx-3 mb-0">Sign Up</h1>
                            </div>


                            <div class="form-outline">
                                <input type="email" id="form3Example3" class="form-control form-control-lg mb-2"
                                    placeholder="Your Name" />
                                <input type="email" id="form3Example3" class="form-control form-control-lg mb-2"
                                    placeholder="Enter a valid email address" />
                                <input type="email" id="form3Example3" class="form-control form-control-lg mb-2"
                                    placeholder="Phone Number" />
                            </div>


                            <div class="form-outline mb-3">
                                <input type={passwordShown ? "text" : "password"} class="form-control form-control-lg mb-2"
                                    placeholder="Enter a password" />
                                <input type={passwordShown ? "text" : "password"} class="form-control form-control-lg mb-2"
                                    placeholder="Confirm password" />
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" onClick={togglePassword} />
                                <label class="form-check-label" for="form2Example3">
                                    Show Password
                                </label>
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-danger btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Register</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Login Your Account <Link to='/login'
                                    class="link-danger">Login Here</Link>
                                </p>
                            </div>


                            <br />
                            <br />
                            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p class="lead fw-normal mb-0 me-3">Sign Up with</p>
                                <button type="button" class="btn btn-danger btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" class="btn btn-danger btn-floating mx-1">
                                    <i class="fab fa-twitter"></i>
                                </button>

                                <button type="button" class="btn btn-danger btn-floating mx-1">
                                    <i class="fab fa-linkedin-in"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div >
    );
};

export default Registration;


