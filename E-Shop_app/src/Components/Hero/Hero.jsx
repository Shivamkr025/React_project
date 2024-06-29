import React from 'react'
import './Hero.css'
import virat from '../Assets/virat02.png'

function Hero() {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY </h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collections</div>
                </div>
            </div>
            <div className="hero-right">
                <img src={virat} alt="" />
            </div>
        </div>
    )
}

export default Hero
