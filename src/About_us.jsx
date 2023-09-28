import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutus from './images/about-us-2.jpg';
import about2 from './images/about-2.jpg'
import about3 from './images/about-3.jpg'
import about4 from './images/about-4.jpg'
import { ImSpoonKnife } from 'react-icons/im';

function About(){
    return(
        // <Container className="container-xxl py-5">
        //     <Container>
        //         <Row className="g-5 align-items-center">
        //             <Col className="lg-6">
        //                 <Row className="g-3">
        //                     <Col className="col-6 text-start">
        //                         <img src={about1} alt="" />
        //                     </Col>
        //                 </Row>
        //                 <Row className="g-3">
        //                     <Col className="col-6 text-start">
        //                         <img src={about2} alt="" />
        //                     </Col>
        //                 </Row>
        //                 <Row className="g-3">
        //                     <Col className="col-6 text-end">
        //                         <img src={about3} alt="" />
        //                     </Col>
        //                 </Row>
        //                 <Row className="g-3">
        //                     <Col className="col-6 text-end">
        //                         <img src={about4} alt="" />
        //                     </Col>
        //                 </Row>
        //             </Col>

        //             <Col className="lg-6">
        //                 <h5>Welcome to Restoran</h5>
        //                 <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
        //                 <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        //             </Col>

        //         </Row>
        //     </Container>

        // </Container>
        <Container className="background py-4 mt-4">
            <Container>
                <Row>
                    <Col className="col-md-6 col-12">
                        <img className="aboutImg py-2" src={aboutus} alt=""  /> 
                    </Col>
                    <Col className="col-md-6 aboutText">
                        <h3>About Us</h3>
                        <h2 class="mb-4">Welcome to <ImSpoonKnife  /> Restoran</h2>
                        <p class="mb-4">Founded in 2008, RESTORN was born out of a passion for exceptional food and a desire to bring people together over delicious meals. Our journey began with a dream of crafting a dining destination where each dish tells a story, and every visit leaves you with cherished memories.</p>
                        <p class="mb-4">At RESTORN, we are committed to the highest standards of quality, authenticity, and innovation. Our culinary team, led by Chef Daniel Smith, is dedicated to sourcing the finest ingredients locally and globally to create a menu that tantalizes the taste buds.</p>
                        <button class="btn btn-primary px-5 py-3" type="submit">Read More</button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About