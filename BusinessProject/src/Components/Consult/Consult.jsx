import React from 'react';
import './Consult.css'; // Import your CSS file

function Consult() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 position-relative d-flex flex-column">
                    <h1 className="mb-4">Welcome to Consult</h1>
                    <div className="icon-circle position-absolute top-0 end-0 translate-middle">
                    </div>
                    <p className="mb-4">Dim dolor diam ipsum sit. Clita erat ipsum et lorem stet lorem duo justo magna dolore</p>
                    <p className="mb-4">Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet magna at et sanctus vero sea sit amet dolores sit dolor duo invidunt dolor, kasd rebum consetetur diam invidunt erat. Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea invidunt rebum sadipscing consetetur. Amet diam amet amet sanctus sanctus invidunt erat ipsum eirmod.</p>
                    <button className="btn btn-primary">Get A Quote</button>
                </div>
                <div className="col-md-6">
                    <div className="d-flex flex-column mb-4" style={{ backgroundColor: 'red' }}>
                        <a href="#" className="d-flex align-items-center text-decoration-none text-dark mb-3 position-relative">
                            <div className="icon-circle bg-white d-flex align-items-center justify-content-center">
                                <i className="fa-solid fa-user-tie"></i>
                            </div>
                            <div className="ms-2">
                                <h2 className="mb-1 text-primary">Business</h2>
                                <p className="mb-0 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </a>
                        <a href="#" className="d-flex align-items-center text-decoration-none text-dark mb-3 position-relative">
                            <div className="icon-circle bg-white d-flex align-items-center justify-content-center">
                                <i className="fa-solid fa-chart-line"></i>
                            </div>
                            <div className="ms-2">
                                <h2 className="mb-1 text-primary">Financial Analysis</h2>
                                <p className="mb-0 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </a>
                        <a href="#" className="d-flex align-items-center text-decoration-none text-dark position-relative">
                            <div className="icon-circle bg-white d-flex align-items-center justify-content-center">
                                <i className="fa-solid fa-scale-balanced"></i>
                            </div>
                            <div className="ms-2">
                                <h2 className="mb-1 text-primary">Legal Advisory</h2>
                                <p className="mb-0 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consult;
