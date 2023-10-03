import './Home.css';

import image1 from '../images/image1.svg'
import image2 from '../images/image2.svg'

export default function Landing() {
  return (
    <div className="container-fluid pt-5 pb-5" id="sparkle">
      <div className="row" id='centered'>
        <div className="col-sm-4 float-start">
          <p className='fw-bold display-3' id='blue'>
            Sparkle with your ideal clean
            <i className="fa-solid fa-snowflake m-3"></i>
            <br />
          </p>
          <p className=''>No hassle! <br /> Instant Online Booking</p>
          < a href='#about'>
            <button type="button" className="btn btn-lg fw-bold rounded-pill mt-5" id='but-ton' >View more</button>
          </a>
        </div>
        <div className="col-sm-4 float-start pt-5">
          <img src={image2} className='img-fluid' alt='image 2' id='img-big' />
        </div>
        <div className='col-sm-4 float-end'>
          <img src={image1} className='img-fluid pt-5' alt='image 1' id='img-small' />
        </div>
      </div>
    </div>
  )
}
