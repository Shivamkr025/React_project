import React , {useState} from 'react'

function AddToCartAndOrder({ product, addToCart, placeOrder }) {

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    const handlePlaceOrder = () => {
        placeOrder([{ ...product, quantity }]);
    };

    return (
        <div className='container'>

            <div className='card shadow-sm m-4'>
                <img src={product.imageUrl} alt={product.productName} className='bd-placeholder-img card-img-top' width='100' height='380' />

                <div className='card-body'>
                    <h5 className='card-title'>{product.productName}</h5>
                    <p className='card-text'>{product.description}</p>
                    <div className="mt-3">
                        <div>
                            <span className="text-danger">$ {product.oldPrice}</span>
                            <span className="text-success ml-2">$ {product.newPrice}</span>
                        </div>

                        <input
                            type="number"
                            className="form-control mt-3"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                        />

                        <button className='btn btn-primary mt-3' onClick={handleAddToCart}>Add to Cart</button>
                        <button className='btn btn-success mt-3 ml-3' onClick={handlePlaceOrder}>Place Order</button>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddToCartAndOrder
