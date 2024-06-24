import React from 'react';
import img_01 from '../../assets/team-1.jpg';
import img_02 from '../../assets/team-2.jpg';
import img_03 from '../../assets/team-3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurTeam.css'

function OurTeam() {
    return (
        <div className="p-4">
            <h1 className="text-center mb-4 mt-4">Our Team</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <img src={img_01} className="card-img-top img-fluid" alt="Team member 1" />
                        <div className="card-body">
                            <h5 className="card-title">CEO Of Consult Pvt LTD</h5>
                            <p className="card-text">Leading with innovation, integrity, and excellence to create a future full of limitless possibilities.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <img src={img_02} className="card-img-top img-fluid" alt="Team member 2" />
                        <div className="card-body">
                            <h5 className="card-title">Manager Of Consult Pvt LTD</h5>
                            <p className="card-text">Empowering our team to achieve excellence and drive success through collaboration and innovation.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <img src={img_03} className="card-img-top img-fluid" alt="Team member 3" />
                        <div className="card-body">
                            <h5 className="card-title">Senior Developer At Consult Pvt LTD</h5>
                            <p className="card-text">Transforming ideas into reality with innovative code and relentless dedication to excellence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
