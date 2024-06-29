import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star1.png'
import star_dull from '../Assets/star_dull.png'
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-image">
        <img className='productDisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-start">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star_dull} alt="" />
            <p>(122)</p>
        </div>
        <div className="productDisplay-right-price">
            <div className="productDisplay-right-oldPrice">${product.old_price}</div>
            <div className="productDisplay-right-newPrice">${product.new_price}</div>
        </div>
        <div className="productDisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="productDisplay-right-size">
            <h1>Select Size </h1>
            <div className="productDisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button className='add-to-cart' onClick={() => {addToCart(product.id)}} >ADD TO CART </button>
      </div>
    </div>
  )
}

export default ProductDisplay
