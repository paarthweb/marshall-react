import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import faker from 'faker';
import { cartReducer } from './Reducers';
import poc from './photo-product.jpg';
import * as axios from 'axios';


const Cart = createContext();
faker.seed(99);

const ContextCopy = ({ children }) => {


  const products = [

    {
      id: 'm1',
      imgUrl: `${i1}`,
      name: `Men's Shirt`,
      description: 'Tan Skin Color Pure Cotton',
      price: 22.99,
      label: "Clothing"
  },
  {
      id: 'm2',
      imgUrl: `${i2}`,
      name: `Women's Loose Fit Jeans`,
      description: 'Comfortable & Trendy!',
      price: 16.5,
      label: "Clothing"
  },
  {
      id: 'm3',
      imgUrl: `${i3}`,
      name: 'Crop Top',
      description: 'Fitted & Wrapped!',
      price: 11.5,
      label: "Clothing"
  },
  {
      id: 'm4',
      imgUrl: `${i4}`,
      name: 'Pure Cotton Kurti',
      description: ' Green & Pink Floral Printed Sequinned',
      price: 9.5,
      label: "Clothing"
  },
  {
      id: 'm5',
      imgUrl: `${i5}`,
      name: 'Oversized Tee',
      description: 'Dropped Shoulder',
      price: 7.3,
      label: "Clothing"
  },
  {
      id: 'm6',
      imgUrl: `${i6}`,
      name: 'Collar Tshirt',
      description: 'Polo T-Shirt with Logo Embroidery',
      price: 15.3,
      label: "Clothing"
  },
  {
      id: 'm7',
      imgUrl: `${i7}`,
      name: 'BB Cream',
      description: 'Maybelline New York Fit Me Fresh Tint With SPF 50 & Vitamin C',
      price: 20.0,
      label: "Cosmetics and Body care"
  },
  {
      id: 'm8',
      imgUrl: `${i8}`,
      name: 'Eye Shadow',
      description: 'L.A. Colors 24 Color Velvet Eyeshadow Palette',
      price: 13.3,
      label: "Cosmetics and Body care"
  },
  {
      id: 'm9',
      imgUrl: `${i9}`,
      name: 'Coffee Body Scrub',
      description: 'Coconut(100g) Natural & Vegan',
      price: 15.3,
      label: "Cosmetics and Body care"
  },
  {
      id: 'm10',
      imgUrl: `${i10}`,
      name: 'Nivea Men Creme',
      description: 'Dark Spot Reduction,Non Greasy Moisturizer,Cream with UV Protect',
      price: 10.0,
      label: "Cosmetics and Body care"
  },

  {
      id: 'm11',
      imgUrl: `${i11}`,
      name: 'Garnier Men Face Wash',
      description: 'Turbo Bright Anti-Pollution Double Action - Cleans Skin Deeply',
      price: 8.1,
      label: "Cosmetics and Body care"
  },
  {
      id: 'm12',
      imgUrl: `${i12}`,
      name: 'Ultime Pro Matte Lip Crayon',
      description: 'COLOR — Peach Me (08)',
      price: 23.4,
      label: "Cosmetics and Body care"
  },
  {
      id: 'm13',
      imgUrl: `${i13}`,
      name: '24H Waterproof Liquid Foundation',
      description: 'Included Blender,Highlighter,HD Face Cream',
      price: 21.9,
      label: "Cosmetics and Body care"
  },
  {
      id: 'm14',
      imgUrl: `${i14}`,
      name: 'Corsica Mystic',
      description: ' Set of 3 Metal Doll Figurines ',
      price: 16.3,
      label: "Home Decor"
  },
  {
      id: 'm15',
      imgUrl: `${i15}`,
      name: 'Ticking Thunder',
      description: 'Resin Handmade,Clock Regular Size',
      price: 12.5,
      label: "Home Decor"
  },
  {
      id: 'm16',
      imgUrl: `${i16}`,
      name: 'Custom Neon Sing Light',
      description: 'Led Sing For Home Decor,Wedding, Birthday, Anniversary (1 Alphabet 8x8 inch)',
      price: 21.9,
      label: "Home Decor"
  },
  {
      id: 'm17',
      imgUrl: `${i17}`,
      name: 'Wall Shelves',
      description: 'Wooden Shelf Home Decor Items Rack (Set of 6) Size- Standard',
      price: 11.4,
      label: "Home Decor"
  },
  {
      id: 'm18',
      imgUrl: `${i18}`,
      name: 'Porcelain Vase and T-Light Holder',
      description: 'Fantasy Collection with round shape',
      price: 17,
      label: "Home Decor"
  },
];

  
      


  
           
  const productItems = products; 
  
    const [iproducts, isetProducts] = useState([]);

    useEffect(() => {
        console.log("Use Effect called");
  
        axios.default.get("http://localhost:8002/products")
        .then((response) => {
            console.log(response.data);
            isetProducts(response.data['iproducts']);
        });
    
    }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  });





  return (<Cart.Provider value={{ state, dispatch }} >
    {children}
  </Cart.Provider>)

    

}

export default ContextCopy;


export const CartState = () => {
  return useContext(Cart)
}