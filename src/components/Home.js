import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import Filters from "./Filters";
import './style.css'
import Header from './Header';
import img from './bg-image.jpg'



const Home = () => {

  const { state: { products },
  } = CartState();

  console.log(products)


  return (
    <div>
  <Header></Header>
    <div className='home'>
   
      

      <Filters />
      <div className='ProductContainer'>{products.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id}></SingleProduct>

      })}
      </div>
     
    </div>
    </div>
  )
}

export default Home




