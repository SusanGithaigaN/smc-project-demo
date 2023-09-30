// import React from 'react'
import './Home.css'
import image2 from '../images/image2.svg'
import image1 from '../images/image1.svg'
import About from '../About/About'
export default function Home() {
  return (
    // <div className='home'>
    <div className="container-fluid home">
      <div className="row">
        <div className="col-6" id='sparkle'>
          <p className='h-100 fw-bold fs-1 m-5' id='blue'>
            Sparkle with your ideal<br /> clean
            <i className="fa-solid fa-snowflake m-3"></i>
            <br/> 
            <button type="button" className="btn fw-bold rounded-pill mt-5" id='but-ton'>View more</button>
          </p>
          {/* <button type="button" className="btn fw-bold rounded-pill" id='but-ton'>View more</button> */}
        </div>
        <div className="col-sm float-start mt-5">
          <img src={image2} className='img-fluid' alt='image 2' id='img-big' />
        </div>
        <div className='col-sm float-end mt-5'>
          <img src={image1} className='img-fluid' alt='image 1' id='img-small' />
        </div>
      </div>
      <About />
    </div>
    // </div>
  )
}
