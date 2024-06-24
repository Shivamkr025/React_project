import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light py-3 mb-4">
            <div className="container">

                <i class="fa-regular fa-face-smile" style={{ color: "rgb(227, 43, 43)", fontSize:'1.5rem'}}></i>
                <span className="fs-4 text-danger" style={{fontWeight:'600'}}>CONSULT</span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item "><a href="#" className="nav-link text-danger" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">ABOUT</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">SERVICE</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">PAGES</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
