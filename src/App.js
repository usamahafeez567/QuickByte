import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import Contact from "./components/contact";
import About from "./components/about";
import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Product from "./components/product";
import Footer from "./components/footer";
import ProductDescription from "./AllDataFolder/productDescription";
import "./App.css";
// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    <>
      <Router>
        <div className="Nav-App">
          <Navbar />
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/productDescription/:id"
                element={<ProductDescription />}
              />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
