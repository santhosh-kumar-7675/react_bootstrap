import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/esm/Container";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { FaQuoteLeft }  from 'react-icons/fa';
import testimonial1 from './images/testimonial-1.jpg';
import testimonial2 from './images/testimonial-2.jpg';
import testimonial3 from './images/testimonial-3.jpg';
import testimonial4 from './images/testimonial-4.jpg';

function Testimonial() {
  return (
    <Container className='py-5'>
        <div className="text-center">
            <h3 className="mb-5 chefHeading">Our Clients Say!</h3>
        </div>
        <Carousel>
            <Carousel.Item>
                <div className=' testimonial-container'>
                    <FaQuoteLeft className='testimonial-icon'/>
                    <p>I can't say enough good things about this restaurant! The food is consistently delicious, and the service is top-notch. I've been coming here for years, and it never disappoints. Highly recommend the RESTORN for a fantastic dining experience!</p>
                    <div className='d-flex align-items-center'>
                        <img src={testimonial1} alt="" />
                        <div className="ps-3">
                            <h5 className="mb-1">Sarah</h5>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className=' testimonial-container'>
                    <FaQuoteLeft className='testimonial-icon'/>
                    <p>I can't say enough good things about this restaurant! The food is consistently delicious, and the service is top-notch. I've been coming here for years, and it never disappoints. Highly recommend the RESTORN for a fantastic dining experience!</p>
                    <div className='d-flex align-items-center'>
                        <img src={testimonial4} alt="" />
                        <div className="ps-3">
                            <h5 className="mb-1">Emily </h5>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className=' testimonial-container'>
                    <FaQuoteLeft className='testimonial-icon'/>
                    <p>I can't say enough good things about this restaurant! The food is consistently delicious, and the service is top-notch. I've been coming here for years, and it never disappoints. Highly recommend the RESTORN for a fantastic dining experience!</p>
                    <div className='d-flex align-items-center'>
                        <img src={testimonial2} alt="" />
                        <div className="ps-3">
                            <h5 className="mb-1">Robert </h5>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className=' testimonial-container'>
                    <FaQuoteLeft className='testimonial-icon'/>
                    <p>I can't say enough good things about this restaurant! The food is consistently delicious, and the service is top-notch. I've been coming here for years, and it never disappoints. Highly recommend the RESTORN for a fantastic dining experience!</p>
                    <div className='d-flex align-items-center'>
                        <img src={testimonial3} alt="" />
                        <div className="ps-3">
                            <h5 className="mb-1">David </h5>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            
        </Carousel>
    </Container>
  );
}

export default Testimonial;