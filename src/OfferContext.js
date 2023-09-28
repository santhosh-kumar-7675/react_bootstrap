import { createContext, useContext, useState } from 'react';
import italian from './images/italian-1.jpg';
import japanese from './images/japanese-2.jpg';
import { GiNoodles }  from 'react-icons/gi';
import { PiPizzaLight }  from 'react-icons/pi';


// Create a context
const OfferContext = createContext();

// Create a provider component
export function OfferProvider({ children }) {
  const [offer, setOffer] = useState({
    percentage: '40%',
    date: '28/09/2023',
    type: 'Italian food',
     icon: <PiPizzaLight/>,
        description: 'Enjoy a delectable Italian dining experience with our special dinner. Indulge in the rich and savory flavors of Italy at our cozy and inviting eatery. Our menu is a culinary journey through the heart of Italy, featuring authentic Italian dishes prepared with the finest ingredients and a touch of passion.',
        image: italian ,
  });

  const changeType = () => {
    setOffer(previousState => {
        return {
          ...previousState,
          type: "Japanese food",
          icon: <GiNoodles/>,
          image: japanese,
          percentage: '30%',
          description: 'Experience the exquisite flavors of Japan with our exclusive dinner. Step into a world of culinary delight as we transport you to the heart of Japan with our authentic Japanese cuisine. Our menu is a celebration of traditional Japanese dishes prepared with the utmost care and attention to detail.'
        };
      });
  };

  return (
    <OfferContext.Provider value={{ offer, changeType }}>
      {children}
    </OfferContext.Provider>
  );
}

// Create a custom hook to access the context
export function useOffer() {
  return useContext(OfferContext);
}
