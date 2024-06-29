import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/shop.png';
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt='Shop Logo' />
                <p>E-Shop</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu('shop')}>
                    <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu === 'shop' ? <hr /> : null}
                </li>
                <li onClick={() => setMenu('man')}>
                    <Link style={{ textDecoration: 'none' }} to="/mans">Mens</Link>{menu === 'man' ? <hr /> : null}
                </li>
                <li onClick={() => setMenu('woman')}>
                    <Link style={{ textDecoration: 'none' }} to="/womans">Womens</Link>{menu === 'woman' ? <hr /> : null}
                </li>
                <li onClick={() => setMenu('kid')}>
                    <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>{menu === 'kid' ? <hr /> : null}
                </li>
            </ul>
            <div className="login-cart">
                <Link style={{ textDecoration: 'none' }} to="/login">
                    <button>Login</button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/cart">
                    <img src={cart} alt="Shopping Cart" />
                </Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    );
};

export default Navbar;
