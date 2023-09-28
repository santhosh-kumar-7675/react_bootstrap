import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaXTwitter} from 'react-icons/fa6';
import {FaFacebookF} from 'react-icons/fa6';
import {FaYoutube} from 'react-icons/fa6';
import {FaInstagram} from 'react-icons/fa6';
import {BiSolidRightArrow}  from 'react-icons/bi';
import {FaLocationDot} from 'react-icons/fa6';
import {FaPhone} from 'react-icons/fa6';
import {GoMail} from 'react-icons/go';
 
function Footer(){
    return(
        <div className="container-fluid footer pt-5 mt-5">
            <Container className='container py-3'> 
                <Row className='row g-5 mb-4'>
                    <Col className="col-lg-3 col-md-4 company">
                        <h4>Company</h4>
                        <a href=""><BiSolidRightArrow/> About Us</a>
                        <a href=""><BiSolidRightArrow/> Contact Us</a>
                        <a href=""><BiSolidRightArrow/> Reservation</a>
                        <a href=""><BiSolidRightArrow/> Privacy Policy</a>
                        <a href=""><BiSolidRightArrow/> Terms & Condition</a>
                    </Col>

                    <Col className="col-lg-3 col-md-4">
                        <h4>Contact</h4>
                        <p className="mb-2"><FaLocationDot/> 123 Street, New York, USA</p>
                        <p className="mb-2"><FaPhone/> +012 345 67890</p>
                        <p className="mb-2"><GoMail/>  info@example.com</p>
                        <div class="d-flex pt-2">
                            <a  className="btn btn-outline-light btn-social" href=""><FaXTwitter /></a>
                            <a  className="btn btn-outline-light btn-social" href=""><FaFacebookF /></a>
                            <a  className="btn btn-outline-light btn-social" href=""><FaYoutube/></a>
                            <a  className="btn btn-outline-light btn-social" href=""><FaInstagram/></a>
                            {/* <a className="btn btn-outline-light btn-social" href=""></a> */}
                        </div>
                    </Col>

                    <Col className="col-lg-3 col-md-4 opening">
                        <h4>Opening</h4>
                        <h5 class="text-light fw-normal">Monday - Saturday</h5>
                        <p>09 AM - 09 PM</p>
                        <h5 class="text-light fw-normal">Sunday</h5>
                        <p>10 AM - 08 PM</p>
                    </Col>

                    <Col className="col-lg-3 col-md-4 newsletter">
                        <h4>Newsletter</h4>
                        <p>Subscribe to the Monthly Newsletter today and elevate your culinary journey.</p>
                        <div className="position-relative mx-auto newsletter">
                                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                    </Col>

                </Row>
                <Container>
                    <div className="copyright">
                        <Row>
                            <Col className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                <p> <span>&copy;</span> RESTORN , All Right Reserved. </p>
                            </Col>

                            <Col className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href="">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </Container>
        </div>
    )
}

export default Footer