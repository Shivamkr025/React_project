import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({onSearch}) {

    const [menu, setMenu] = useState('shop')
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <div>
            <header class="p-4 bg-dark text-white">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

                            <li> <a href='' class="nav-link px-2 text-secondary">Home</a></li>

                            <li onClick={() => setMenu('shop')} ><Link to='/' class="nav-link px-2 text-white">Shop</Link> {menu === 'shop' ? <hr /> : null}</li>

                            <li onClick={() => setMenu('man')} ><Link to='/man' class="nav-link px-2 text-white">Mans</Link> {menu === 'man' ? <hr /> : null}</li>

                            <li onClick={() => setMenu('woman')} ><Link to='/woman' class="nav-link px-2 text-white">Womans</Link>{menu === 'woman' ? <hr /> : null} </li>

                            <li onClick={() => setMenu('kid')} ><Link to='kid' class="nav-link px-2 text-white">Kids</Link> {menu === 'kid' ? <hr /> : null} </li>
                        </ul>

                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input
                                type="search"
                                className="form-control form-control-dark"
                                placeholder="Search..."
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </form>

                        <div class="text-end">
                            <button type="submit" class="btn btn-warning " onClick={handleSearchSubmit} >Search</button>
                            <Link to='/login' > <button type="button" class="btn btn-outline-light me-2" style={{ marginLeft: '40px' }}>Login</button> </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Navbar
