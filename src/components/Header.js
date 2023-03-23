import React from 'react'
import { Badge, Container,Dropdown,Nav,Navbar} from "react-bootstrap"
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'


const Header = () => {

  const{state:{cart},
} = CartState();
  return (
    <Navbar bg='dark' variant="dark" style={{ height: 80 }}>
     <Container>
      

        <Navbar.Brand>
     
            <Link to="/">
                MarshallShop
            </Link>
        </Navbar.Brand>

        <Nav>
            <Dropdown alignRight>
              <DropdownToggle variant='success'>
                <FaShoppingCart color="white" fontSize="25px" /> 
                
                <Badge>{cart.length}</Badge>
                </DropdownToggle> 


            <DropdownMenu style={{ minWidth:370 }}>
              
              
            
                 <span style={{padding:10}}>Cart is Empty!!</span>
              

               
            </DropdownMenu>
            </Dropdown>
        </Nav>
     </Container>
        
        </Navbar>
    
    
  )
}

export default Header
