import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newLetter'>
      <h1>Get Exclusive Offers On Your Email </h1>
      <p>subscribe to our newsletter and stay update</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
