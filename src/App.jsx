import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Categories from './pages/Categories'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import MainLayout from './MainLayout/MainLayout'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './components/Checkout'
import Payment from './pages/Payment'
import OrderSuccess from './pages/OrderSuccess'
import Wishlist from './pages/Wishlist'
import TrackOrder from './pages/TrackOrder'
import OrderStatus from './pages/OrderStatus'
import FaqSection from './pages/FaqSection'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element= {<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/payment" element={<Payment />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/order-success" element={<OrderSuccess />}/>
      <Route path="/track-order" element={<TrackOrder />}/>
      <Route path="/order-status" element={<OrderStatus />}/>
      <Route path="/faq-section" element={<FaqSection />}/>

      <Route path="/categories" element={<Categories/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>


      </Route>
    </Routes>
  )
}

export default App