import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TbChefHat } from 'react-icons/tb';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { ImSpoonKnife } from 'react-icons/im';
import { BsFillCartCheckFill }  from 'react-icons/bs';

function Services(){
    return(
        <Container className="container-xxl py-5">
            <Container>
                <Row className="row g-4">
                    <Col className="col-lg-3 col-sm-6">
                        <div className="service-content p-4">
                            <TbChefHat className="icons" />
                            <h3>Master Chefs</h3>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </Col>
                    <Col className="col-lg-3 col-sm-6 ">
                        <div className="service-content p-4">
                            <ImSpoonKnife className="icons" />
                            <h3>Quality Food</h3>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </Col>
                    <Col className="col-lg-3 col-sm-6">
                        <div className="service-content p-4">
                            <BsFillCartCheckFill className="icons" />
                            <h3>Online Order</h3>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </Col>
                    <Col className="col-lg-3 col-sm-6">
                        <div className="service-content p-4">
                            <TfiHeadphoneAlt className="icons" />
                            <h3>24 / 7 Service</h3>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Services