// import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className='container-fluid pt-5 pb-5' style={{ height: 'fitContent' }}>
            <div className="row justify-content-center">
                {/* <p className='fs-1'>Contact</p> */}
                <div className="col-4">
                <p className='fs-1'>Contact</p>
                    {/* contact form */}
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name </label>
                            <input type="text" className="form-control" id="exampleInputname" placeholder='jane doe' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='youremail@service.com' />
                            <div id="emailHelp" className="form-text">
                                {/* We'll never share your email with anyone else. */}
                            </div>
                        </div>
                        <div className="form-floating">
                            {/* <p>Message</p> */}
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "200px", backgroundColor: 'aliceblue' }}></textarea>
                            <label htmlFor="floatingTextarea2">Write your message here</label>
                        </div>
                        <button type="button" className="btn fw-bold rounded-pill mt-5" id='but-ton'>Send</button>
                    </form>
                </div>
                <div className="col-4">
                    <div className="card" id='sparkle'>
                        <div className="card-body">
                            <h5 className="card-title">Email:</h5>
                            <p className="card-text">For more information, send an email to:</p>
                            <p className='fw-bold'>almaid@gmail.com</p>
                        </div>
                    </div>
                    <br />
                    <div className="card" id='sparkle'>
                        <div className="card-body">
                            <h5 className="card-title">Phone:</h5>
                            <p className="card-text">Call us at:</p>
                            <p className='fw-bold'>+254 700 000 00</p>
                        </div>
                    </div>
                    <br />
                    <div className="card" id='sparkle'>
                        <div className="card-body">
                            <h5 className="card-title">Office:</h5>
                            <p className="card-text">We are located at:</p>
                            <p className='fw-bold'>Nairobi, Kenya</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
