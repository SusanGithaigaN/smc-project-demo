// import React from 'react'
import './Home.css'
import image2 from '../images/image2.svg'
import image1 from '../images/image1.svg'
export default function Home() {
  return (
    <div className='home d-sm-flex'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6" id='sparkle'>
            <p className='fw-bold fs-1 m-5 pt-5' id='blue'>
              Sparkle with your ideal<br /> clean
              <i className="fa fa-snowflake-o" aria-hidden="true"></i>
            </p>
          </div>
          <div className="col-sm">
            {/* <div className='container'> */}
              {/* <div className='row'> */}
                {/* <div className='col-sm'> */}
                  <img src={image2} className='img-fluid h-55 mt-5' alt='image 2'/>
                </div>
                <div className='col-sm'>
                {/* <div className='col'> */}
                <img src={image1} className='img-fluid h-150' alt='image 1' id='img-small'/>
                </div>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}
