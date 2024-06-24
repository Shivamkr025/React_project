import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

function Footer() {
    return (
        <div className='bg-dark text-white'>
            <div className="text-center mb-4 bg-danger" style={{ height: '25vh', paddingTop: '10vh' }}>
                <h1 className="text-white">Stay Updated!!!</h1>
                <div className="d-flex justify-content-center align-items-center"> 
                    <input type="text" placeholder="Your Email" className="form-control d-inline-block text-white border-white" style={{ width: '20%', borderRadius: '0px' }} />
                    <button type="button" className="btn btn-dark" style={{ borderRadius: '0px' }}>Sign Up</button>
                </div>
            </div>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-2 my-2 ">
                    <div className="col mb-3">
                        <h5 className="text-white">Quick Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon"></i>Home</li>
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon"></i>About Us</li>
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon"></i>Our Services</li>
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon"></i>Latest Blog Post</li>
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon"></i>Contact Us</li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5 className="text-white">Popular Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon"></i>Home</li>
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon"></i>About Us</li>
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon"></i>Our Services</li>
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon"></i>Latest Blog Post</li>
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon"></i>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5 className="text-white">Get In Touch</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-location-dot icon"></i><span className="ms-2">123 Street, New York, USA</span></li>
                            <li className="nav-item mb-2"><i className="fa-regular fa-envelope-open icon"></i><a href="#" className="text-white"><span className="ms-2">info@consult.com</span></a></li>
                            <li className="nav-item mb-2 text-white"><i className="fa-solid fa-phone icon"></i><span className="ms-2">+013278529</span></li>
                        </ul>
                    </div>


                    <div className="col mb-3">
                        <h5 className="text-white">Follow Us</h5>
                        <div className="d-flex">
                            <div className="me-2 text-white" id="footer-icon"><i className="fab fa-twitter"></i></div>
                            <div className="me-2 text-white" id="footer-icon"><i className="fab fa-facebook-f"></i></div>
                            <div className="me-2 text-white" id="footer-icon"><i className="fab fa-linkedin"></i></div>
                            <div className="me-2 text-white" id="footer-icon"><i className="fab fa-instagram"></i></div>
                        </div>
                    </div>
                    <div className='container border-top text-white ' style={{width:'200vh'}}>
                        <p class="text-center text-white">© Business Consult PVT LTD, Design by Shivam</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
