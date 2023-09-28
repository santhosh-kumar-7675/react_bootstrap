import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import chef1 from './images/team-1.jpg';
import chef2 from './images/team-2.jpg';
import chef3 from './images/team-3.jpg';
import chef4 from './images/team-4.jpg';



function Chefs(){
    return(
        <Container className="pt-3 pb-5"> 
            <Container>
                <div className="text-center">
                    <h3 className="mb-5 chefHeading">Our Master Chefs</h3>
                </div>
                
                <Row className="row g-4">
                    <Col className="col-lg-3 col-md-6">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="overflow-hidden m-4">
                                {/* <img class="img-fluid" src="img/team-1.jpg" alt=""> */}
                                <img src={chef2} alt="" />
                            </div>
                            <div className="chef-details">
                                <h5 class="mb-0">Daniel Smith</h5>
                                <small>Executive Chef</small>
                            </div>
                        </div>
                    </Col>

                    <Col className="col-lg-3 col-md-6">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div class="overflow-hidden m-4">
                                {/* <img class="img-fluid" src="img/team-1.jpg" alt=""> */}
                                <img src={chef1} alt="" />
                            </div>
                            <div className="chef-details">
                                <h5 class="mb-0">Michael Johnson</h5>
                                <small>Sous Chef</small>
                            </div>
                        </div>
                    </Col>

                    <Col className="col-lg-3 col-md-6">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div class="overflow-hidden m-4">
                                {/* <img class="img-fluid" src="img/team-1.jpg" alt=""> */}
                                <img src={chef3} alt="" />
                            </div>
                            <div className="chef-details">
                                <h5 class="mb-0">David Brown</h5>
                                <small>Grill Chef</small>
                            </div>
                        </div>
                    </Col>

                    <Col className="col-lg-3 col-md-6">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div class="overflow-hidden m-4">
                                {/* <img class="img-fluid" src="img/team-1.jpg" alt=""> */}
                                <img src={chef4} alt="" />
                            </div>
                            <div className="chef-details">
                                <h5 class="mb-0">Christopher Wilson</h5>
                                <small>Saucier</small>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}

export default Chefs;