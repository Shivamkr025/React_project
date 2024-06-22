import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
    return (
        <div>
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                    <span class="fs-4">CONSULT</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="#" class="nav-link">HOME</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">ABOUT</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">SERVICE</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">PAGES</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">CONTACT</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar
