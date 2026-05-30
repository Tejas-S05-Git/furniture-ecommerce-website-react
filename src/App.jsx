import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./MainLayout/MainLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./components/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import Wishlist from "./pages/Wishlist";
import TrackOrder from "./pages/TrackOrder";
import OrderStatus from "./pages/OrderStatus";
import FaqSection from "./pages/FaqSection";
import MyAccount from "./pages/MyAccount";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CompleteProfile from "./pages/auth/CompleteProfile";
import VerifyCode from "./pages/auth/VerifyCode";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <Routes>

      {/* auth pages - no navbar/footer */}
      <Route
  path="/login"
  element={
    <PublicRoute>
      <Login />
    </PublicRoute>
  }
/>

<Route
  path="/register"
  element={
    <PublicRoute>
      <Register />
    </PublicRoute>
  }
/>
      <Route path="/complete-profile" element={<CompleteProfile />} />
      <Route path="/verify-code" element={<VerifyCode />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* website pages */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="payment" element={<Payment />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="order-success" element={<OrderSuccess />} />
        <Route path="track-order" element={<TrackOrder />} />
        <Route path="order-status" element={<OrderStatus />} />
        <Route path="faq-section" element={<FaqSection />} />
        <Route path="my-account" element={<MyAccount />} />
        <Route path="categories" element={<Categories />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Route>

    </Routes>
  );
};

export default App;