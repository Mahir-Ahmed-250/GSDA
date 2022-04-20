import React from 'react';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from './1.png'
import './Footer.css'


const fb = <FontAwesomeIcon icon={faFacebook} />
const yt = <FontAwesomeIcon icon={faYoutube} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const instagram = <FontAwesomeIcon icon={faInstagram} />

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-1">
                    <img className='logo-footer' src="https://i.ibb.co/fn84bst/Logo-2.png" alt="" /><br /><br />
                    <p>ITIL® / PRINCE2® Are Registered Trade Marks Of AXELOS Limited, The Swirl Logo™ Is A Trademark Of AXELOS Limited, Copyright © AXELOS Limited, Used Under Permission Of AXELOS Limited, All Right Reserved.</p>
                    <span>COBIT® is a Trademark of ISACA®</span>
                </div>
                <div className="footer-2">
                    <img className="payment" src={img1} alt="" />
                </div>
                <div className="footer-3">
                    <a href="https://www.facebook.com/globalskillsbd"><h5 className="footer-icons1">{fb}</h5></a>
                    <a href="https://twitter.com/gsdabd?lang=en"><h5 className="footer-icons1">{twitter}</h5></a>
                    <a href="https://www.youtube.com/channel/UCsaze3eS7onawxGN149h1Kw"><h5 className="footer-icons1">{yt}</h5></a>
                </div>
                <div className="footer-4">
                    {/* <div>
                        <p>İsmetpaşa, 122. Sokak, Sultangazi/İstanbul, Turkey</p>
                    </div>
                    <div>
                        <p>+324-2350297</p>
                    </div>
                    <div>
                        <p><a className='mail' href="mailto:support@company.com">contact@wheelbase.com</a></p>
                    </div> */}
                </div>
                <div className="footer-5">
                    <p>Our Location</p>
                    <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29201.331249212373!2d90.428924!3d23.812681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe43c376a71bfb570!2zR2xvYmFsIFNraWxscyBEZXZlbG9wbWVudCBBZ2VuY3kg4KaX4KeN4Kay4KeL4Kas4Ka-4KayIOCmuOCnjeCmleCmv-CmsuCmuCDgpqHgp4fgpq3gp4fgprLgpqrgpq7gp4fgpqjgp43gpp8g4KaP4Kac4KeH4Kao4KeN4Ka44Ka_!5e0!3m2!1sbn!2sbd!4v1650273824917!5m2!1sbn!2sbd" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Footer;