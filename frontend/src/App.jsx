import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
 
 const[showLogin, setShowLogin] = useState(false)

  return (
  
  <>
  <ToastContainer/>
  {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
  <div className='app'>
  <ToastContainer/>
    <Navbar setShowLogin ={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Order' element={<PlaceOrder/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
     
      </Routes>  
    </div>
    <Footer/>
  </>
  
  )
}

export default App
