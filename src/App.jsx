import React from 'react'
import './App.css'
import Category from './Components/Category/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Account from './Components/Account/Account';
import HomePage from './Components/HomePage/HomePage';

const App = () => {

    const cart = []
    var demo = (item) => {
        const ls = window.localStorage;
        item.Quantity = 1;
        item.totalPrice = item.price;
        cartArray.push(item);
        ls.setItem('wish-list', JSON.stringify(cartArray));
        console.log(JSON.parse(ls.getItem('wish-list')));
        console.log(demo);
    }
    return (
        <div>
            {/* <ShopContextProvider> */}
            <Router>
                <Routes>
                    {/* <Route path='/' element={<Products/>}/> */}
                    <Route path='/' element={<HomePage />} />
                    <Route path='/category' element={<Category />} />
                    <Route path='/cart' element={<Cart cartArray = {cart}/>} />
                    <Route path='/account' element={<Account />} />
                </Routes>
            </Router>
            {/* </ShopContextProvider> */}
        </div>
    )
}

export default App;