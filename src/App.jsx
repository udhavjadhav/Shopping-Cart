import React from 'react'
import './App.css'
import Category from './Components/Category/Category';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Account from './Components/Account/Account';
import HomePage from './Components/HomePage/HomePage';
// import { ShopContextProvider } from './Context/Cart-Context'
const App = () => {
    return (
        <div>
            {/* <ShopContextProvider> */}
            <Router>
                <Routes>
                    {/* <Route path='/' element={<Products/>}/> */}
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/category' element={<Category/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/account' element={<Account/>}/>
                </Routes>
            </Router>
            {/* </ShopContextProvider> */}
        </div>
    )
}

export default App;