import { useState ,  useEffect  } from "react";
import { createContext, useContext } from "react";
import { useOffer } from './OfferContext';

function DiscountDetails(){
    const { offer, changeType } = useOffer();

    let x='2151';

    return(
        <div>
            <h2>Special Dinner</h2>
            <p>Type:{offer.type}</p>
            <p>{x}</p>
            
        </div>

        
    );
}


export default DiscountDetails;