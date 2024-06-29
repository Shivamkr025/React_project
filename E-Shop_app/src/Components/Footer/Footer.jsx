import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/shop.png'
import instagram from '../Assets/insta.png'
import whatsapp from '../Assets/whatsaap.png'
import linkedin from '../Assets/linkedin.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-link">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instagram} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={linkedin} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved. </p>
            </div>
        </div>
    )
}

export default Footer
