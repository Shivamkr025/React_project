import React from 'react';
import consult_Img from '../../assets/quote.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function ConsultMain() {
    return (
        <>
            <div className="d-flex">
                <div className="flex-fill h-100 p-5 bg-body-tertiary border mr-3 mt-4">
                    <h2 className='mt-4'>Add borders</h2>
                    <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                    <div className="mb-3 mt-4 d-flex">
                        <input type="text" className="form-control me-2" placeholder="Full Name" style={{height:'3rem', width:'20rem'}} />
                        <input type="email" className="form-control" placeholder="Email Address" style={{height:'3rem', width:'20rem'}} />
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <select className="form-control me-2" style={{width:'20rem' , height:'3rem'}}>
                            <option>Select A Service</option>
                            <option>Option 2</option>
                        </select>
                        <button type="button" class="btn btn-danger btn-lg" style={{width:'20rem'}}>Large button</button>
                    </div>
                </div>
                <div className="flex-fill h-100 bg-body-tertiary border rounded-3 mt-4">
                    <img src={consult_Img} alt="" style={{height:'25rem', width:'45rem' , backgroundSize:'cover'}}/>
                </div>
            </div>
        </>
    );
}

export default ConsultMain;
