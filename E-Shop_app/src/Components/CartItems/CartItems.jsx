import React, { useContext } from 'react'
// import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

function CartItems() {
    const {all_product , cartItem , removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartItems'>
        <div className="cartItem-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Totel</p>
            <p>Remove</p>
        </div>
        <hr />
        <div>
            <div className="cartItem-format">
                <img src="" alt=""  className='carticon-product-icon'/>
                <p></p>
                <p></p>
                <button className='cartitems-quantity'></button>
                <p></p>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default CartItems
