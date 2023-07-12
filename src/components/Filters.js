import React from 'react'
import { Button, Form } from "react-bootstrap";
import Rating from './Rating';
import { useState } from 'react';

const Filters = (props) => {
  const { initialOutOfStock, onValueChange } = props;

  const [state, setState] = useState({
    shouldIncludeOutOfStock: initialOutOfStock
  });
  
  const [rate, setRate] = useState(2)

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
      <input
            onChange={() => {
              const newState = { ...state, sort: "high_to_low" };
              setState(newState);
              onValueChange(newState);
            }}
            type="radio"
            value="high_to_low"
            name="sort"
          />
          <span> High To Low</span>
      </span>
      <span>
      <input
            onChange={() => {
              const newState = { ...state, sort: "low_to_high" };
              setState(newState);
              onValueChange(newState);
            }}
            type="radio"
            value="low_to_high"
            name="sort"
          />
          <span> Low To High</span>
      </span>
     
      <span>
      <input
          type="checkbox"
          onChange={(value) => {
            console.log(value);
            let toggleValue;
            if (state.shouldIncludeOutOfStock === "true") {
              toggleValue = "false";
            } else {
              toggleValue = "true";
            }
            const newState = {
              ...state,
              shouldIncludeOutOfStock: `${toggleValue}`
            };
            setState(newState);
            onValueChange(newState);
          }}
          checked={state.shouldIncludeOutOfStock === "true"}
        />
        <span> Should Include out of stock </span>
      </span>

      
    </div>
  );
};

export default Filters;