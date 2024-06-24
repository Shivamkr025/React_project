import React from 'react';
import img_01 from '../../assets/blog-1.jpg';
import img_02 from '../../assets/blog-2.jpg';
import img_03 from '../../assets/blog-3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogPost.css';

function BlogPost() {
    return (
        <div className="latest-blogs p-4">
            <h1 className="text-center mb-4 mt-4">Latest Blog Post</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img src={img_01} className="card-img-top img-fluid" alt="Blog post 1" />
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className='icon-date '>
                                    <p className="m-0 text-white">01<br />JAN <br /> 2024</p>
                                </div>
                                <div className="ms-2">
                                    <div className="d-flex admin-info">
                                        <p className="me-2"><i class="fa-regular fa-user"></i> ADMIN</p>
                                        <p><i className="fa-regular fa-bookmark"></i> WEB DESIGN</p>
                                    </div>
                                    <h6 className="card-title">Magna sea dolor ipsum amet lorem eos</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img src={img_02} className="card-img-top img-fluid" alt="Blog post 2" />
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className='icon-date'>
                                    <p className="m-0 text-white">01<br />JAN <br /> 2024</p>
                                </div>
                                <div className="ms-2">
                                    <div className="d-flex admin-info">
                                        <p className="me-2"><i className="fa-regular fa-user"></i> ADMIN</p>
                                        <p><i className="fa-regular fa-bookmark"></i> WEB DESIGN</p>
                                    </div>
                                    <h6 className="card-title">Magna sea dolor ipsum amet lorem eos</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img src={img_03} className="card-img-top img-fluid" alt="Blog post 3" />
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className='icon-date'>
                                    <p className="m-0 text-white">01<br />JAN <br /> 2024</p>
                                </div>
                                <div className="ms-2">
                                    <div className="d-flex admin-info">
                                        <p className="me-2"><i className="fa-regular fa-user"></i> ADMIN</p>
                                        <p><i className="fa-regular fa-bookmark"></i> WEB DESIGN</p>
                                    </div>
                                    <h6 className="card-title">Magna sea dolor ipsum amet lorem eos</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
