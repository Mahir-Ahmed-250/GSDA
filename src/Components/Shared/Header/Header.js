import { NavLink } from 'react-router-dom';
import { faMailBulk, faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'
import Button from '@mui/material/Button';


const mail = <FontAwesomeIcon icon={faMailBulk} />
const phone = <FontAwesomeIcon icon={faMobilePhone} />

const Header = () => {
    return (
        <div className='nav'>
            <div className="container mt-2">
                <div className="nav-links-top">
                    <div>

                        <a className='nav-links' href="mailto:info@globalskills.com.bd" > <span className='icon-mail'>{mail}</span>info@globalskills.com.bd</a>
                        <a className='nav-links' href="callto:01711958556" >{phone}+8801766343434</a>
                    </div>
                    <div>
                        <NavLink className='nav-links-login' to="/login">
                            <Button variant="contained" color="success">
                                Login
                            </Button>
                        </NavLink>
                        <NavLink className='nav-links-register' to="/register">
                            <Button variant="contained" color="success">
                                Register
                            </Button>
                        </NavLink>


                    </div>
                </div>




            </div>

        </div>
    );
};

export default Header;