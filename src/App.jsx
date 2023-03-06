import React from 'react'
import Products from './Components/Products/Products';
import Category from './Components/Category/Category';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Account from './Components/Account/Account';
const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Products/>}/>
                    <Route path='/category' element={<Category/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/account' element={<Account/>}/>
                </Routes>
            </Router>
            
        </div>
    )
}

export default App;