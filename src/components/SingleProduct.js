import React from 'react'
import { Card, Button,Col, Form } from 'react-bootstrap'
import { CartState } from "../context/Context";
import { Link } from 'react-router-dom'


const SingleProduct = ({ prod }) => {

  const {
    state: { cart },
    dispatch,
  } = CartState();



  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}

          </Card.Subtitle>

          {cart.some((p) => p.id === prod.id) ? (


            <Button onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              });
            }}
              variant='danger'>Remove from cart</Button>
          ) : (
            
            <Button onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              });
            }} disabled={!prod.inStock}> {!prod.inStock ? "Out of Stock" : "Add to Cart"}</Button> 
          )}
          
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                
        </Card.Body>
      </Card>

    </div>
  )
}

export default SingleProduct

