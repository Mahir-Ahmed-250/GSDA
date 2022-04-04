import { NavLink } from 'react-router-dom';
import { faMailBulk, faMobilePhone, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'




const qu = <FontAwesomeIcon icon={faQuestion} />
const mail = <FontAwesomeIcon icon={faMailBulk} />
const phone = <FontAwesomeIcon icon={faMobilePhone} />

const Header = () => {
    return (
        <div>

            <div className="container mt-2">
                <div className="nav-links-top">
                    <div>
                        <NavLink className='nav-links' to="/ask-a-question">  <i className="icon-question">{qu}</i>
                            <span className='ask-text'>Ask a Question</span> </NavLink>
                        <a className='nav-links' href="mailto:info@globalskills.com.bd" >{mail}info@globalskills.com.bd</a>
                        <a className='nav-links' href="callto:01711958556" >{phone}+8801766343434</a>
                    </div>
                    <div>
                        <NavLink className='nav-links-login' to="/login">
                            <span >Login</span>
                        </NavLink>
                        <NavLink className='nav-links-register' to="/register">
                            <span >Register</span>
                        </NavLink>


                    </div>
                </div>




            </div>

        </div>
    );
};

export default Header;