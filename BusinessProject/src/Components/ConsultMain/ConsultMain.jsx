import React from 'react';
import consult_Img from '../../assets/quote.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function ConsultMain() {
    return (
        <div className="p-4">
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="h-100 p-5 bg-body-tertiary border">
                        <h2 className='mt-4'>Add borders</h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                        <div className="mb-3 mt-4 d-flex flex-column flex-md-row">
                            <input type="text" className="form-control me-md-2 mb-2 mb-md-0" placeholder="Full Name" style={{ height: '3rem', width: '100%' }} />
                            <input type="email" className="form-control" placeholder="Email Address" style={{ height: '3rem', width: '100%' }} />
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center mt-4">
                            <select className="form-control me-md-2 mb-2 mb-md-0" style={{ height: '3rem' }}>
                                <option>Select A Service</option>
                                <option>Option 2</option>
                            </select>
                            <button type="button" className="btn btn-danger btn-lg" style={{ height: '3rem', width: '100%' }}>Large button</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="h-100 bg-body-tertiary border rounded-3">
                        <img src={consult_Img} alt="" className="img-fluid" style={{ height: '25rem', objectFit: 'cover', width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConsultMain;
