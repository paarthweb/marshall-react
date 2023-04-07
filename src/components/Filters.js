import React from 'react'
import { Button, Form } from "react-bootstrap";
import Rating from './Rating';
import { useState } from 'react';


const Filters = () => {

  
  const [rate, setRate] = useState(2)

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="High to Low"
          name="group1"
          type="radio"
          id={`inline-1`}
          
        
          

        />
      </span>
      <span>
        <Form.Check
          label="Low to high"
          inline
          name="group1"
          type="radio"
          id={`inline-2`}

         

        />
      </span>
      <span>
        <Form.Check
          inline
          label="Home Decor"
          name="group1"
          type="radio"
          id={`inline-3`}

        />
      </span>
      <span>
        <Form.Check
          inline
          label="All"
          name="group1"
          type="checkbox"
          id={`inline-4`}


        />
      </span>

      <Button
        variant="light">
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;