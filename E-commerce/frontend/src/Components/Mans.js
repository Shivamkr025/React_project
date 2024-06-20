import React, { useEffect, useState } from 'react';
import Man_banner from './Assets/banner/man_banner.jpg'

function Mans() {
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

    const mansProduct = products.filter(product => product.category === "man t-shirt")

    return (
        <div className='container'>
            <div className='banner m-4' >
                <img src={Man_banner} alt='Banner' className='img-fluid' style={{ width: '100%' }} />
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {mansProduct.slice(0, 9).map((product, index) => (

                    <div className='col' key={index}>
                        <div className='card shadow-sm m-4 ' style={{width:'88%'}}>
                            <img src={product.imageUrl} alt={product.productName} className='bd-placeholder-img card-img-top d-flex' width='100' height='400' />

                            <div className='card-body'>
                                <h5 className='card-title'>{product.productName}</h5>
                                <p className='card-text'>{product.description}</p>
                                <div className="mt-3">
                                    <div>
                                        <span className="text-danger">$ {product.oldPrice}</span>
                                        <span className="text-success ml-2">$ {product.newPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Mans;
