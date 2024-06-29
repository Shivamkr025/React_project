import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/woman_fashion/womans_offers03.png'

function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ONE BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_img} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
