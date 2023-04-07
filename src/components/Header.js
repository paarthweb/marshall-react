import React from 'react'
import { Badge, Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap"
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import pic from './images.png'
import './style.css'

const Header = () => {
  
  const { state: { cart },
  } = CartState();
  return (
    <Navbar bg='dark' variant="dark" style={{ height: 80 }} sticky='top'>
      <Container>


        <Navbar.Brand className='brand' variant='success'>
        <Link to="/home"> <img src={pic} alt='avatar' className='image'></img>
          
            MarshallShop
          </Link>
        </Navbar.Brand>
        <Link to='/cart'>
        <Nav>
         <div className='cart-icon'>
          <Dropdown alignRight>
            <DropdownToggle>
              <FaShoppingCart color="white" fontSize="25px" />

              <Badge>{cart.length}</Badge>
            </DropdownToggle>


            <DropdownMenu style={{ minWidth: 370 }}>
            
            

            


              <span style={{ padding: 10 }}></span>
            


            </DropdownMenu>
          </Dropdown>
          </div>
        </Nav>
        </Link>
        <Link to='/'>
        <Button variant='success'>
          Logout
        </Button>
        </Link>
      </Container>

    </Navbar>


  )
}

export default Header
