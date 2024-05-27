import React from 'react'
import banner04 from './Assets/banner10.jpg'
import banner05 from './Assets/banner06.jpg'
import banner06 from './Assets/banner07.jpg'

function Banner() {
    return (
        <div>
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner04} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner05} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner06} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Banner
