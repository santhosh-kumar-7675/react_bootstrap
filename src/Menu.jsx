import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Menu(props){
    return(
        <div>
            {/* <p>Item: {props.menuProp.item} Price:{props.menuProp.item}</p> */}
             <Card >
                <Card.Img variant="top" src={props.menuProp.image} className='menuImage' />
                <Card.Body>
                    <Card.Title>{props.menuProp.item}</Card.Title>
                    <Card.Text>
                    {props.menuProp.price}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
        
        
        
    );
}

export default Menu;