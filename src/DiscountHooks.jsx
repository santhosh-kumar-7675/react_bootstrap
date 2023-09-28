import { useState ,  useEffect  } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import italian from './images/italian-1.jpg';
// import japanese from './images/japanese-2.jpg';
// import { GiNoodles }  from 'react-icons/gi';
// import { PiPizzaLight }  from 'react-icons/pi';
import { PiCursorClick }  from 'react-icons/pi';

import { useOffer } from './OfferContext';

function DiscountHook(){
    const { offer, changeType } = useOffer();

    useEffect(() => {
      document.title = `Special Dinner - ${offer.type}`;
    }, [offer.type]);


    return(
        <Container className="container-xxl py-5 px-0 discountHook my-5">
            <Row className="g-0">
                <Col className="col-md-6 discountHook-text"> 
                    <h2 className='discountHook-heading mb-4'>Special Dinner</h2>
                    <h2 className='discountHook-heading mb-4'>{offer.type} {offer.icon}</h2>
                    <p>{offer.description}</p>
                    <h5>Valid until : <span className='discountHook-text-color'>{offer.date}</span></h5>
                    <h5>Discount : <span className='discountHook-text-color'>{offer.percentage} </span></h5>
                    <button className="btn btn-secondary py-2 mt-2" 
                        onClick={changeType}>Check Other Cuisine <span className="text-white"><PiCursorClick/></span></button>
                </Col>
                <Col className="col-md-6 col-12">
                    <img className="discountHook-image" src={offer.image} alt="" />
                </Col>
            </Row>     

        </Container>
    
        
    )
    
}

export default DiscountHook