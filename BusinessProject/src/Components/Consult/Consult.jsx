import React from 'react';
import './Consult.css';

function AboutConsult() {
    return (
        <div className="first_about">
            <div className="about_wrapper">
                <h1 className='h1'>Welcome To <span className='consult'>Consult</span></h1>
                <div className="btns_pr1">
                    <h6 className='small-content'>
                        Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore
                    </h6>
                    <h6 className='long-content'>
                        Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet magna at et sanctus, vero sea sit amet dolores, sit dolor duo invidunt dolor, kasd rebum consetetur diam invidunt erat stet. Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea invidunt rebum sadipscing consetetur. Amet dlam amet amet sanctus sanctus invidunt erat ipsum eirmod.
                    </h6>
                    <button style={{ borderRadius: "50px" }}>
                        Get a quote
                    </button>
                </div>
            </div>
            <div className="about_">
                <div className='profile_first'>
                    <div className='image_profile d-flex justify-content-center align-items-center p-3 p-md-0'>
                        <i className="fa-solid fa-user-tie" style={{ color: 'red', fontSize: "1.5rem" }}></i>
                    </div>
                    <div className='profile_text'>
                        <h2 className='h2'>Business Planning</h2>
                        <p className='para'>Tempor erat elitr rebum at clita. Díam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                    </div>
                </div>
                <div className='profile_first'>
                    <div className='image_profile d-flex justify-content-center align-items-center p-3 p-md-0'>
                        <i className="fa-solid fa-chart-line" style={{ color: 'red', fontSize: "1.5rem" }}></i>
                    </div>
                    <div className='profile_text'>
                        <h2 className='h2'>Market Analysis</h2>
                        <p className='para'>Tempor erat elitr rebum at clita. Díam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                    </div>
                </div>
                <div className='profile_first'>
                    <div className='image_profile d-flex justify-content-center align-items-center p-3 p-md-0'>
                        <i className="fa-solid fa-scale-balanced" style={{ color: 'red', fontSize: "1.5rem" }}></i>
                    </div>
                    <div className='profile_text'>
                        <h2 className='h2'>Legal Advisory</h2>
                        <p className='para'>Tempor erat elitr rebum at clita. Díam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutConsult;
