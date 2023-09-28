import logo from './logo.svg';
import './App.css';
import './Mediaquery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Banner from './Banner';
import Services from './Services';
import About from './About_us';
import Reservation from './Reservation';
import Footer from './Footer';
import Chefs from './Chefs';
import Testimonial from './Testimonial';
import Menu from './Menu';
import pizza from './images/pizza.jpg';
import steak from './images/steak.jpg';
import ramen from './images/ramen.jpg';
import Discount from './Discount';
import DiscountHook from './DiscountHooks';
import DiscountDetails from './DiscountDetails';
import { OfferProvider } from './OfferContext';
import Register from './Resgister';

function App() {
  
  let menuData1={
    item:'Pizza',
    price: '$7',
    image: pizza,

  };
  let menuData2={
    item:'Steak',
    price: '$35',
    image: steak,

  };

  let menuData3={
    item:'Ramen',
    price: '$8',
    image: ramen,

  };

  return (
    <div className="App">
      <OfferProvider>
        <Header/>
        <Banner/>
        <Services/>
        <About/>
        <DiscountHook/>
        <Reservation/>
        <Chefs/>
        <Testimonial/>
        <Footer/>

        {/* <DiscountDetails/> */}
        {/* <div className='menu-cards my-5'>
          <Menu  menuProp={menuData1}/>
          <Menu  menuProp={menuData2}/>
          <Menu  menuProp={menuData3}/>
        </div> */}
        
        {/* <Discount/> */}

        <Register/>
      </OfferProvider>

    </div>
  );
}

export default App;
