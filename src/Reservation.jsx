import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reservation from './images/reservation.jpg';
import reservation2 from './images/reservation-2.jpg';
import reservation3 from './images/reservation-3.jpg';
import about2 from './images/about-2.jpg';
import Form from 'react-bootstrap/Form';



function Reservation(){
    return(
        <Container className="container-xxl py-5 px-0 reservation">
            <Row className="g-0">
                <Col className="col-md-6 reservationSize">
                    <div className="reservationImg">
                    </div>
                </Col>
                
                <Col className="col-md-6 d-flex align-items-center reservation-left">
                    <div className="p-5">
                        <h3>Reservation</h3>
                        <h2 className="text-white mb-4">Book A Table Online</h2>
                        <Form>
                            <Row className="g-3">
                                <Col className="col-md-6">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" /> 
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Your Email" /> 
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" placeholder="Date" /> 
                                </Col>
                                <Col className="col-md-6">
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control type="time" placeholder="time" /> 
                                </Col>
                                <Col className="col-12">
                                    <Form.Label>No.of.people</Form.Label>
                                    <Form.Select>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col className="col-12">
                                    <Form.Label>Special Request</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Col>
                                <Col className="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
                    
                    
        </Container>
    )
}

export default Reservation