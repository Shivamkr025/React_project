import React from 'react'
import img_Client from '../../assets/testimonial.jpg'
import img_Client02 from '../../assets/testimonial-2.jpg'
import './OurClient.css'

function OurClient() {
    return (
        <div className="p-4">
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="h-100 bg-body-tertiary border rounded-3">
                        <img src={img_Client} alt="" className="img-fluid" style={{ height: '25rem', objectFit: 'cover', width: '100%' }} />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="h-100 p-5 bg-body-tertiary border">
                        <h2 className='mt-4'>What Say Our Client !!!</h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                        <div className="mb-3 mt-4 d-flex flex-column flex-md-row">
                            <div class="col d-flex align-items-start">
                                <img src={img_Client02} alt="" className='client-img' />
                                <div style={{ marginLeft: '1rem' }}>
                                    <h4 class="fw-bold mb-0">Featured title</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex  flex-md-row align-items-center">
                            <div className='icon-div'>
                                <i class="fa-solid fa-arrow-right fa-flip-horizontal"></i>
                            </div>
                            <div className='icon-div'>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClient
