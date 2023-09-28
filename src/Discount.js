import React from 'react';
import ReactDOM from 'react-dom/client';
import italian from './images/italian.jpg';
import japanese from './images/japanese-2.jpg';
import { GiNoodles }  from 'react-icons/gi';
import { PiPizzaLight }  from 'react-icons/pi';
import { PiCursorClick }  from 'react-icons/pi';
// import { BsGraphUpArrow }  from 'react-icons/bs';
// import { BsClock }  from 'react-icons/bs';

class Discount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          percentage: "40%",
          date: "28/09/2023",
          type: "Italian food ",
          icon: <PiPizzaLight/>,
          description: 'Enjoy a delectable Italian dining experience with our special dinner. Indulge in the rich and savory flavors of Italy at our cozy and inviting eatery. Our menu is a culinary journey through the heart of Italy, featuring authentic Italian dishes prepared with the finest ingredients and a touch of passion.',
          image: italian, 
        };  

        this.changeType = this.changeType.bind(this);
        
    }

    // changeType = () => {
    //     this.setState({type: "Japanese food"});
    // }

    changeType() {
        this.setState({ type: "Japanese food" });
        this.setState({ icon: <GiNoodles/> });
        this.setState({ image: japanese });
        this.setState({ percentage: '30%' });
        this.setState({ description: 'Experience the exquisite flavors of Japan with our exclusive dinner. Step into a world of culinary delight as we transport you to the heart of Japan with our authentic Japanese cuisine. Our menu is a celebration of traditional Japanese dishes prepared with the utmost care and attention to detail.' });
    }
    

    render() {
        return(
            <div className='discount p-5 my-5'>
                <div className='discount-text'>    
                    <h2 className='discount-heading mb-4'>Special Dinner</h2> 
                    <h2 className='discount-heading mb-4'>{this.state.type} {this.state.icon} </h2>
                    <p>{this.state.description}</p>
                    <h5>Valid until : <span className='discount-text-color'>{this.state.date}</span></h5>
                    <h5>Discount : <span className='discount-text-color'>{this.state.percentage} </span></h5>
                    
                    <button className="btn btn-primary py-2 mt-2" 
                        onClick={this.changeType}>Check Other Cuisine <span id='black'><PiCursorClick/></span></button>

                </div>

                <div className='discount-image'>
                    <img src={this.state.image}/>
                </div>

            </div>
        );
    }
}

export default Discount;


