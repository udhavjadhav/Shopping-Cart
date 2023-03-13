import React, { useState, Fragment, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import BottomNav from '../BottomNav/BottomNav'
import './Cart.css';

function Cart({ count }) {
  const [cart, setCart] = useState([])
  return (
    <div className='cart'>
      <Navbar />
      {
        cart && cart == 0
          ?
          <div className='empty-cart'>
            <img className='empty' src="./assets/empty.webp" alt="" />
            <p className='empty-text'>Your Bag is Empty !</p>
          </div>
          :
          <div>
            Item is loading
          </div>
      }

      <BottomNav count={count} />
    </div>
  )
}

export default Cart;