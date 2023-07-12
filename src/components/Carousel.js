import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import pic7 from './clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg'
import pic8 from './household-appliances-realistic-composition_1284-65307.jpg'
import pic9 from './living-room-interior-design_1284-11919.jpg'

import './Carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel ata-bs-theme="dark" interval={5000} variant='dark' indicators='false'  >
      <Carousel.Item>
        <img
          className="Carouselpics"
          src={pic8}
          
        />
       

        <Carousel.Caption>
          <h3 className="carousel-text">Electronics</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Carouselpics"
          src={pic7}
   
        />
        
        
        <Carousel.Caption>
          <h3 className="carousel-text">Clothing</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Carouselpics"
          src={pic9}
         
        />

        <Carousel.Caption>
          <h3 className="carousel-text">Home Furniture
          </h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;