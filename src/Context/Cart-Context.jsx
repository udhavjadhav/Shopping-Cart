// import React, { createContext, useState } from 'react'
// import Products from '../Components/Category/Products'

// export const ShopContext = createContext(null)

// const getDefaultCart = () =>{
//     let cart = {};
//     for(let i = 1; i < Products.length + 1; i++){
//         cart[i] = 0;
//     }
//     return cart;
// }
//  export const ShopContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState(getDefaultCart())

//     const addToCart = (itemId) =>{
//         setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
//     }

//     const removeFromCart = (itemId) =>{
//         setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
//     }

//     const ContextValue = {cartItems, addToCart, removeFromCart}
//     console.log(cartItems)
//   return (
//     <ShopContext.Provider value={ContextValue}>
//         {props.children}
//     </ShopContext.Provider>
//   )
// }
