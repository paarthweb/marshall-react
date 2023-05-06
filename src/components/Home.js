import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import Filters from "./Filters";
import './style.css'
import Header from './Header';
import img from './bg-image.jpg'
import { useState } from "react";




const Home = () => {

  const { state: { products }} = CartState();

  console.log(products);


  const [stateProducts, setProducts] = useState([...products]);



  return (
    <div>
      <Header></Header>
      <div className='home'>



        <Filters
          initialOutOfStock="false"
          onValueChange={(value) => {
            const { shouldIncludeOutOfStock, sort } = value;

            const newProducts = products.filter((product) => {
              if (shouldIncludeOutOfStock === "true") {
                return true;
              }

              return !!product.inStock;
            });
 



            if (sort === "high_to_low") {
              newProducts.sort((product1, product2) => {
                return parseFloat(product2.price) - parseFloat(product1.price);
              });
            } else if (sort === "low_to_high") {
              newProducts.sort((product1, product2) => {
                return parseFloat(product1.price) - parseFloat(product2.price);
              });
            }


            setProducts([...newProducts]);
          }} />
        <div className='ProductContainer'>{stateProducts.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id}></SingleProduct>

        })}
        </div>

      </div>
    </div>
  )
}

export default Home




