import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import img from './login.png';



const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
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
                                <h1 class="text-center fw-bold mx-3 mb-0">Sign In</h1>
                            </div>


                            <div class="form-outline mb-3">
                                <input type="email" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Enter your email address" />
                            </div>


                            <div class="form-outline mb-3">
                                <input type={passwordShown ? "text" : "password"} class="form-control form-control-lg mb-2"
                                    placeholder="Enter your password" />
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" onClick={togglePassword} />
                                <label class="form-check-label" for="form2Example3">
                                    Show Password
                                </label>

                            </div>
                            <br />
                            <div class="d-flex justify-content-between align-items-center">

                                <div class="form-check mb-0">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label class="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" class="text-body">Forgot password?</a>
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-danger btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/registration'
                                    class="link-danger">Register Here</Link>
                                </p>
                            </div>


                            <br />
                            <br />
                            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
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

export default Login;