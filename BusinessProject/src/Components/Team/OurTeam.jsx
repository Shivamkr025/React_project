import React from 'react';
import img_01 from '../../assets/team-1.jpg';
import img_02 from '../../assets/team-2.jpg';
import img_03 from '../../assets/team-3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function OurTeam() {
    return (
        <div className="p-4">
            <h1 className="text-center mb-4 mt-4">Our Team</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <img src={img_01} className="card-img-top img-fluid" alt="Team member 1" />
                        <div className="card-body">
                            <h5 className="card-title">Team Member 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <img src={img_02} className="card-img-top img-fluid" alt="Team member 2" />
                        <div className="card-body">
                            <h5 className="card-title">Team Member 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <img src={img_03} className="card-img-top img-fluid" alt="Team member 3" />
                        <div className="card-body">
                            <h5 className="card-title">Team Member 3</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
