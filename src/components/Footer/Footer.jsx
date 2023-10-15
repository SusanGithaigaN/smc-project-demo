import {
    MDBFooter,
    MDBContainer
} from 'mdb-react-ui-kit';
import './Footer.css';

export default function Footer() {
    return (
        <>
            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <MDBContainer className='p-4 pb-0'>
                    <div id="mc_embed_shell">
                        <link
                            href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
                            rel="stylesheet"
                            type="text/css"
                        />
                        <div id="mc_embed_signup">
                            <form
                                action="https://app.us21.list-manage.com/subscribe/post?u=7e5f0ca3fd5ed75f8d6e1012f&amp;id=3e5b7987fe&amp;f_id=005fe9e6f0"
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                className="validate"
                                target="_blank"
                            >
                                <div id="mc_embed_signup_scroll">
                                    <h2>Subscribe to our newsletter</h2>
                                    <div className="indicates-required">
                                        <span className="asterisk">*</span> indicates required
                                    </div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-EMAIL">
                                            Email Address <span className="asterisk">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="EMAIL"
                                            className="required email"
                                            id="mce-EMAIL"
                                            required=""
                                        // value=""
                                        />
                                        <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                                    </div>
                                    <div hidden="">
                                        <input type="hidden" name="tags" value="2959959" />
                                    </div>
                                    <div id="mce-responses" className="clear foot">
                                        <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                        <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                                    </div>
                                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                        <input type="text" name="b_7e5f0ca3fd5ed75f8d6e1012f_3e5b7987fe" tabIndex="-1" />
                                    </div>
                                    <div className="optionalParent">
                                        <div className="clear foot">
                                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button btn btn-lg fw-bold rounded-pill mt-5" value="Subscribe" />
                                            <p style={{ margin: '0px auto' }}>
                                                <a
                                                    href="http://eepurl.com/iBl_Jg"
                                                    title="Mailchimp - email marketing made easy and fun"
                                                >
                                                    <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                                                        <img
                                                            className="refferal_badge"
                                                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                                            alt="Intuit Mailchimp"
                                                            style={{
                                                                width: '220px',
                                                                height: '40px',
                                                                display: 'flex',
                                                                padding: '2px 0px',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                        />
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'aliceblue' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='https://susan-njeri-githaga.vercel.app/'>
                        Susan Githaiga
                    </a>
                </div>


            </MDBFooter>

        </>
    );
}