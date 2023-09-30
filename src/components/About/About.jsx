import './About.css'

export default function About() {
    return (
        <div className="container-fluid mt-4">
            <p className='fs-5'>
                At Almaid, we take pride in offering trustworthy and reliable housekeeping services in Nairobi.
            </p>
            <div className="row" id='sparkle' style={{ height: '250px', paddingTop: '80px' }}>
                <div className="col-6">
                    <p className='fs-2'>
                        Check out our services
                    </p>
                </div>
                <div className="col-6">
                    <p>Lorem ipsum lorenwbvwe vwe<br />
                        wegegegegegegegwewge</p>
                </div>
            </div>

            {/* cards */}
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
                <div className="col">
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                            <h5 className="card-title fw-bold">Sed ut perspiciatis</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" className="btn fw-bold rounded-pill mt-5" id='but-ton'>Learn more</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                            <h5 className="card-title fw-bold">Sed ut perspiciatis</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" className="btn fw-bold rounded-pill mt-5" id='but-ton'>Learn more</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                            <h5 className="card-title fw-bold">Sed ut perspiciatis</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" className="btn fw-bold rounded-pill mt-5" id='but-ton'>Learn more</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Sed ut perspiciatis</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" className="btn fw-bold rounded-pill mt-5" id='but-ton'>Learn more</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
