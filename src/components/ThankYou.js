import React from 'react'
import { Button } from 'react-bootstrap'
import HeaderWithoutCartIcon from './HeaderWithoutCartIcon'
import './style.css'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className='thank-you'>
    <div> <HeaderWithoutCartIcon></HeaderWithoutCartIcon>
    
    <div className='thanks'>

    Payment Successful!!! THANKS FOR ORDERING !!
    </div>
    <Link to='/home'>
    <div className='keep-shopping'>
    <Button>
      Keep Shopping
    </Button>
    </div>
    </Link>
    </div>
    </div>
  )
}

export default ThankYou

