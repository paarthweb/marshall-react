import React from 'react'
import { Badge, Container, Dropdown, Nav, Navbar } from "react-bootstrap"
import pic from './images.png'
import { Link } from 'react-router-dom'
import './style.css'


const HeaderWithoutCartIcon = () => {


  return (
    <Navbar bg='dark' variant="dark" style={{ height: 80 }} sticky='top'>
      <Container>


        <Navbar.Brand>
          <img src={pic} alt='avatar' className='image'></img>
          <Link to="/">
            MarshallShop
          </Link>
        </Navbar.Brand>

      
      </Container>





      
    </Navbar>


  )
}

export default HeaderWithoutCartIcon;
