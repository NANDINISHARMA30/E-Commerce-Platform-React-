import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';  
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import Collection from './pages/Collection';



function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      <Routes>
        <Route path='/' element={<h1>Home Page</h1>}/>
        <Route path='/orders' element={<h1>Orders Page</h1>}/>
        <Route path='/placeorder' element={<h1>Place Order Page</h1>}/>
        <Route path='/contact' element={<h1>Contact</h1>}/>
        <Route path='/about' element={<h1>About</h1>}/>
        <Route path='/login' element={<h1>Login</h1>}/>
        <Route path='/signup' element={<h1>Sign Up</h1>}/>
        <Route path='/cart' element={<h1>Cart</h1>}/>
        <Route path='/product/:id' element={<h1>Product Details</h1>}/>

      </Routes> 
    </div>
  );
}


export default App
