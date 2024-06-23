import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className="container">
            <div className="text-center mb-4 bg-danger " style={{ height: '25vh' }}>
                <h1>Stay Updated!!!</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <input type="text" placeholder="Your Email" className="form-control d-inline-block" style={{ width: '25%', borderRadius: '0px' }} />
                    <button type="button" class="btn btn-dark" style={{ borderRadius: '0px' }}>Sign Up</button>
                </div>
            </div>
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-2 my-2 border-top">
                <div className="col mb-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">Home</li>
                        <li className="nav-item mb-2">About Us</li>
                        <li className="nav-item mb-2">Our Services</li>
                        <li className="nav-item mb-2">Latest Blog Post</li>
                        <li className="nav-item mb-2">Contact US</li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Popular Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">Home</li>
                        <li className="nav-item mb-2">About Us</li>
                        <li className="nav-item mb-2">Our Services</li>
                        <li className="nav-item mb-2">Latest Blog Post</li>
                        <li className="nav-item mb-2">Contact US</li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Get In Touch</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">123 Street, New York, USA</li>
                        <li className="nav-item mb-2"><a href="#">info@consult.com</a></li>
                        <li className="nav-item mb-2">+013278529</li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Follow Us</h5>
                    <div className="d-flex">
                        <div className="me-2"><i className="fa-brands fa-twitter"></i></div>
                        <div className="me-2"><i className="fa-brands fa-facebook-f"></i></div>
                        <div className="me-2"><i className="fa-brands fa-linkedin"></i></div>
                        <div className="me-2"><i className="fa-brands fa-instagram"></i></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
