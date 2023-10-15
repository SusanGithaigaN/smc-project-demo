import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current.checkValidity()) {

            emailjs.sendForm('service_hji58rf', 'template_3aqbfkc', form.current, 'x-CSbTKhgLXtK28nX')
                .then((result) => {
                    // show success alert
                    setShowAlert(true);
                    // show errors alert
                    setErrorMessage(false);
                    console.log(result.text);
                })
                .catch((error) => {
                    setShowAlert(false);
                    setErrorMessage(true);
                    console.log(error.text);
                });
        } else {
            form.current.reportValidity();
            setShowAlert(false);
            setErrorMessage(true);
        }
        e.target.reset();
    };

    const handleInputChange = () => {
        setShowAlert(false);
        setErrorMessage(false);
    };

    return (
        <div className='container-fluid pt-5 pb-5' style={{ height: 'fitContent' }} id='contact'>
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <p className='fs-1'>
                        <i className="fa-solid fa-id-card-clip p-3" id='blue'></i>
                        Contact
                    </p>
                    {/* success */}
                    {showAlert && (
                        <div className="alert alert-success" role="alert">
                            Message successfully sent. Thank you!
                        </div>
                    )}
                    {/* errors */}
                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            Invalid message format. Please check your input<i className="fa fa-frown-o" aria-hidden="true" style={{ color: 'red' }}></i>
                        </div>
                    )}
                    {/* contact form */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name </label>
                            <input type="text" className="form-control" id="exampleInputname" placeholder='Your name' name='user_name' pattern="^[a-zA-Z\s]+$" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='youremail@service.com' name="user_email" required />
                        </div>
                        <div className="form-floating">
                            {/* <p>Message</p> */}
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name='message' style={{ height: "200px", backgroundColor: 'aliceblue' }}></textarea>
                            <label htmlFor="message">Write your message here</label>
                        </div>
                        <button type="submit" className="btn btn-lg fw-bold rounded-pill mt-5" id='but-ton' value="send">Send</button>
                    </form>
                </div>
                <div className="col-sm-4 pt-5">
                    <div className="card" id='sparkle'>
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="fa-solid fa-envelope-circle-check p-2 fs-4" id='blue'></i>
                                Email
                            </h5>
                            <p className="card-text">For more information, send an email to:</p>
                            <p className='fw-bold'>thealmaidteam@gmail.com</p>
                        </div>
                    </div>
                    <br />
                    <div className="card" id='sparkle'>
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="fa-solid fa-phone-volume p-2 fs-4" id='blue'></i>
                                Phone
                            </h5>
                            <p className="card-text">Call us at:</p>
                            <p className='fw-bold'>+254 700 000 00</p>
                        </div>
                    </div>
                    <br />
                    <div className="card" id='sparkle'>
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="fa-solid fa-building p-2 fs-4" id='blue'></i>
                                Office
                            </h5>
                            <p className="card-text">We are located at:</p>
                            <p className='fw-bold'>Nairobi, Kenya</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Contact;