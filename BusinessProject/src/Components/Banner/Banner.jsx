import React from 'react'
import './Banner.css'

function Banner() {

    return (
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary" id='main-Container'>
                <div class="col-md-6 p-lg-5 mx-auto my-5" style={{color:'white'}}>
                    <p>BUSINESS CONSULTANCY</p>
                    <h2 class="display-5 fw-bold">We Provide Solution On</h2>
                    <h2 class="display-3 fw-bold">Your Business</h2>
                    <div class="d-flex gap-3 justify-content-center lead fw-normal">
                        <button type="button" class="btn btn-danger">Get Quote</button>
                        <button type="button" class="btn btn-primary">Contact Us</button>
                    </div>
                </div>

                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </div>
    )
}

export default Banner
