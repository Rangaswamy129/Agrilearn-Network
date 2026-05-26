import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";

import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyProducts from "./pages/BuyProducts";
import BlogDetails from "./pages/BlogDetails";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";

import "./styles/main.css";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ProtectedRoute from "./components/ProtectedRoute";

import ForgotPassword from "./pages/ForgotPassword";





const App = () => {
  return (
 <BrowserRouter>
  

      <Routes>
        {/*  Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<Route
path="/forgot-password"
element={<ForgotPassword />}
/>
       

       

       

        

        <Route
          path="/"
          element={
            <ProtectedRoute>
               <Navbar />
              <Home />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
               <Navbar />
              <About />
              <Footer />
            </ProtectedRoute>
          }
        />
         <Route
          path="/blogs"
          element={
            <ProtectedRoute>
               <Navbar />
              <Blogs />
              <Footer />
            </ProtectedRoute>
          }
        />
         <Route
          path="/contact"
          element={
            <ProtectedRoute>
               <Navbar />
              <Contact />
              <Footer />
            </ProtectedRoute>
          }
        />
         <Route
          path="/buy-products"
          element={
            <ProtectedRoute>
               <Navbar />
              <BuyProducts />
              <Footer />
            </ProtectedRoute>
          }
        />
         <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <BlogDetails />
              <Footer />
            </ProtectedRoute>
          }
        />
         <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
              <Footer />
            </ProtectedRoute>
          }
        />
 <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout />
              <Footer />
            </ProtectedRoute>
          }
        />
         <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
              <Footer />
            </ProtectedRoute>
          }
        />
          <Route
          path="/terms"
          element={
            <ProtectedRoute>
              <Terms />
              <Footer />
            </ProtectedRoute>
          }
        />
          <Route
          path="/privacy"
          element={
            <ProtectedRoute>
              <Privacy />
              <Footer />
            </ProtectedRoute>
          }
        />
      </Routes>
      

      
    </BrowserRouter>
  );
};

export default App;



   