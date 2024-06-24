import React from 'react'
import './Banner.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Banner() {

    return (
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary" id='main-container'>
            <div className="col-md-8 col-lg-6 mx-auto my-5 text-center" id='main-text'>
                <p className="display-6 fw-bold">BUSINESS CONSULTANCY</p>
                <h1 className="display-4 fw-bold" id='EmployeeText'>We Provide Solutions For Your Business</h1>
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center lead fw-normal mt-4">
                    <button type="button" className="btn btn-outline-danger btn-lg">Get Quote</button>
                    <button type="button" className="btn btn-outline-danger btn-lg">Contact US</button>
                </div>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    )
}

export default Banner
