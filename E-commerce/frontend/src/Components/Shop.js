import React, { useEffect, useState } from 'react';
import Banner from './Assets/banner/woman_banner.jpg'
import {Link} from 'react-router-dom'
function Shop({searchResults }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9000/api/product/view');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);

    const displayProducts = searchResults.length > 0 ? searchResults : products;

    return (
        <div className='container'>
            <div className='banner m-4'>
                <img src={Banner} alt='Banner' className='img-fluid' style={{ width: '100%' }} />
            </div>
            <Link to='/addToCart'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {displayProducts.slice(0, 9).map((product, index) => (
                    <div className='col' key={index}>
                        <div className='card shadow-sm m-4' style={{ width: '88%' }}>
                            <img src={product.imageUrl} alt={product.productName} className='bd-placeholder-img card-img-top d-flex' width='100' height='380' />
                            <div className='card-body'>
                                <h5 className='card-title'>{product.productName}</h5>
                                <div className="mt-3 d-flex justify-content-cente">
                                    <div >
                                        <span className="text-success " style={{paddingLeft:'10px' , fontSize:'20px' , fontWeight:'600'}}>$ {product.newPrice}</span>

                                        <span className="text-danger" style={{textDecoration: 'line-through', paddingLeft:'10px' , fontSize:'20px' , fontWeight:'600'}}>$ {product.oldPrice}</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </Link>
        </div>
    );
}

export default Shop;