import './About.css'
import illustration from '../images/Illustration-Home.svg'
import office from '../images/Illustratioon-Office-1.svg'

export default function About() {
    return (
        <div className="container-fluid mt-4" id='about'>
            <div className='p-5'>
                <p className='fs-5 text-center'>
                    At Almaid, we take pride in offering trustworthy and reliable housekeeping services in Nairobi.
                </p>
            </div>
            <div id='sparkle'>
                <div className="row" style={{ height: '250px', paddingTop: '80px' }} id='centered'>
                    <div className="col-6">
                        <p className='fs-2'>
                            Check out our services
                        </p>
                    </div>
                    <div className="col-6">
                        <p>Our team of experienced and qualified professionals is dedicated to providing you with the highest
                            quality of service, so you can relax and enjoy your home without having to worry about the cleaning.
                            Check out our wide range of services today to find the perfect solution for your needs.
                        </p>
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className="row" id='centered'>
                <div className="col-sm-6">
                    <div className="card shadow-none">
                        <img src={illustration} className="rounded mx-auto d-block image" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title " id='blue'><strong>Residential <br /> </strong>Cleaning</h5>
                            <p className="card-text text-center">When you work with Almaid Cleaners, you can breathe easy because your home will soon sparkle.</p>
                            <p className="card-text text-center">One Time / Recurring</p>
                            <div className="row justify-content-center">
                                <div className="col-4">
                                    <ul>
                                        <li>Kitchen</li>
                                        <li>Bathrooms</li>
                                        <li>Bedrooms & Living Rooms</li>
                                        <li>Windows</li>
                                        <li>Same Day Service</li>
                                        <li>Walls</li>
                                        <li>Appliances (Oven & Fridge)</li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul>
                                        <li>Hardwood & Carpet Floors</li>
                                        <li>Move in / Move out</li>
                                        <li>Post construction</li>
                                        <li>Laundry</li>
                                    </ul>
                                </div>
                            </div>
                            <button type="button" className="btn fw-bold rounded-pill mt-5" id='but-ton'>Learn more</button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card shadow-none">
                        <img src={office} className="rounded mx-auto d-block image" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title " id='blue'><strong>AirBNB<br /> </strong>Cleaning</h5>
                            <p className="card-text text-center">Our referred cleaners also provide professional AirBNB & Short Term Rental cleaning with a wide variety of cleaning methods, chemicals, and equipment to facilitate and expedite the cleaning process.</p>
                            <p className="card-text text-center">One Time / Recurring</p>
                            <div className="row justify-content-center">
                                <div className="col-4">
                                    <ul>
                                        <li>You Can Give a Checklist</li>
                                        <li>They typically can make the unit look great</li>
                                        <li>Before or After Each Guest</li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul>
                                        <li>Laundry</li>
                                        <li>Changing Beds</li>
                                        <li>Dishes</li>
                                        <li>Etc</li>
                                    </ul>
                                </div>
                            </div>
                            <button type="button" className="btn fw-bold rounded-pill mt-5" id='but-ton'>Learn more</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
