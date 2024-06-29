import React, { useContext } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

function Shopcategory(props) {
    const { all_product } = useContext(ShopContext); 

    if (!all_product || !Array.isArray(all_product)) {
        return <div>Loading products...</div>;
    }

    return (
        <div className='shop-category'>
            <img className='shopCategory-banner' src={props.banner} alt="" />
            <div className="shopCategory-indexShort">
                <p>
                    <span>Showing 1-12 </span> out of 36 products
                </p>
            </div>
            <div className="ShopCategory-Products">
                {all_product.map((item, index) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={index}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopCategory-loadMore">Explore more </div>
        </div>
    );
}

export default Shopcategory;
