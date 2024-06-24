import React from 'react'
import './Result.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img_01 from '../../assets/feature.jpg'

function Result() {
    return (
        <div className="company-rating-container" style={{ textAlign: "center" }}>
            <div className="main-containers my-5">
                <h2 className="title">Why You Choose Us!!!</h2>
                <div className="content-div m-4 d-flex flex-wrap justify-content-around">
                    <div className="sub-content">
                        <div className="nested-div mb-1 text-start">
                            <div className="d-flex align-items-center p-3 mb-2">
                                <div className='iconDiv' style={{ borderRadius: "50%", backgroundColor: "rgb(240, 50, 50)", paddingLeft: "9px" }}>
                                    <i className="fa-solid fa-percent me-2" style={{ color: '#ffffff' }}></i>
                                </div>
                                <h4 className="mb-0">Best In Industry</h4>
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>

                        <div className="nested-div mb-1 text-start">
                            <div className="d-flex align-items-center p-3 mb-2">
                                <div className='iconDiv' style={{ borderRadius: "50%", backgroundColor: "rgb(240, 50, 50)", paddingLeft: "9px" }}>
                                    <i className="fa-solid fa-percent me-2" style={{ color: '#ffffff' }}></i>

                                </div>
                                <h4 className="mb-0">99% Success Rate</h4>
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>

                        <div className="nested-div mb-1 text-start">
                            <div className="d-flex align-items-center p-3 mb-2">
                                <div className='iconDiv' style={{ borderRadius: "50%", backgroundColor: "rgb(240, 50, 50)", paddingLeft: "9px" }}>
                                    <i className="fa-solid fa-award me-2" style={{ color: "#ffffff" }}></i>

                                </div>
                                <h4 className="mb-0">Award Winning</h4>
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>
                    </div>

                    <div className="sub-content p-2">
                        <img
                            src={img_01}
                            alt="Example"
                            className="img-fluid"
                        />
                        <div className="below-image-content p-1" style={{ backgroundColor: 'rgb(240, 50, 50)', color: 'white', fontSize: "15px" }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacinia quam. Vestibulum ante ipsum primis auctor neque ac sapien maximus eleifend. Nulla ac lacus purus. Cras quis nibh vehicula, tincidunt risus in, fermentum libero.</p>
                            <button type="button" className="btn btn-light">Learn More</button>
                        </div>
                    </div>

                    <div className="sub-content">
                        <div className="nested-div mb-1 text-start">
                            <div className="d-flex align-items-center p-3 mb-2">
                                <div className='iconDiv' style={{ borderRadius: "50%", backgroundColor: "rgb(240, 50, 50)", paddingLeft: "9px" }}>
                                    <i className="fa-regular fa-face-smile me-2" style={{ color: "#ffffff" }}></i>

                                </div>
                                <h4 className="mb-0">100% Happy Client</h4>
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>

                        <div className="nested-div mb-1 text-start">
                            <div className="d-flex align-items-center p-3 mb-2">
                                <div className='iconDiv' style={{ borderRadius: "50%", backgroundColor: "rgb(240, 50, 50)", paddingLeft: "9px" }}>
                                    <i className="fa-solid fa-user-tie me-2" style={{ color: '#ffffff' }}></i>

                                </div>
                                <h4 className="mb-0">Professional Advisory</h4>
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>

                        <div className="nested-div mb-1 text-start">
                            <div className="d-flex align-items-center p-3 mb-2">
                                <div className='iconDiv' style={{ borderRadius: "50%", backgroundColor: "rgb(240, 50, 50)", paddingLeft: "9px" }}>
                                    <i className="fa-solid fa-headset me-2" style={{ color: '#ffffff' }}></i>

                                </div>
                                <h4 className="mb-0">24/7 Customer Support</h4>
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias corrupti omnis iste explicabo nisi.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
