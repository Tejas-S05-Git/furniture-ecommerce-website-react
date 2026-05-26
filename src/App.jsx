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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element= {<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>


      </Route>
    </Routes>
  )
}

export default App