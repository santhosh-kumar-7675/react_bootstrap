
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './images/hero.png';

function Banner(){
    return(
      <Container className="container-xxl py-4 mb-5" id='banner'>
        <Container className="my-5 py-5">
          <Row className="align-items-center  g-5">
            <Col className="banner-heading col-lg-6 text-center text-lg-start">
              <h2 class="text-white pb-2">Enjoy Our Delicious Meal</h2>
              <p class="text-white pb-2">Explore a menu crafted with passion and expertise. From delectable appetizers to mouthwatering mains and divine desserts, our dishes are a symphony of taste.</p>
              <a href="" class="btn btn-primary py-sm-3 px-sm-5 me-3">BOOK A TABLE</a>
            </Col>
            <Col className="col-lg-6 text-center text-lg-end">
              <img class='hero' src={img1} alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
    )
}
export default Banner;