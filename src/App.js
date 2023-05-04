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
import "./App.css";

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
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
