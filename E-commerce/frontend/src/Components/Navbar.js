import React from 'react'

function Navbar() {
    return (
        <div>
            <header class="p-4 bg-dark text-white">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="" class="nav-link px-2 text-secondary">Home</a></li>
                            <li><a href="/" class="nav-link px-2 text-white">Shop</a></li>
                            <li><a href="man" class="nav-link px-2 text-white">Mans</a></li>
                            <li><a href="woman" class="nav-link px-2 text-white">Womans</a></li>
                            <li><a href="kid" class="nav-link px-2 text-white">Kids</a></li>
                        </ul>

                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div class="text-end">
                            <button type="submit" class="btn btn-warning " >Search</button>
                            <button type="button" class="btn btn-outline-light me-2"style={{marginLeft:'40px'}}>Login</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Navbar
