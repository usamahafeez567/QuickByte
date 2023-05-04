import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navi = useNavigate();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light px-lg-3 shadow-sm sticky-top"
        style={{ backgroundColor: "#032039" }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand m-2 fw-bold fs-2 ps-1"
            to="/"
            style={{ color: "#56E39F" }}
          >
            QuickByte
          </Link>
          <h3 className="font_3" style={{ fontSize: "18px" }}>
            <span style={{ color: "#FFFFFF" }}>
              <span style={{ fontSize: "16px" }}>Everything. </span>
            </span>
            <span className="color_18">
              <span style={{ fontSize: "16px" }}>In the moment</span>
            </span>
          </h3>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active me-2"
                  aria-current="page"
                  to="/"
                  style={{ color: "#56E39F" }}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link me-2"
                  to="/product"
                  style={{ color: "#56E39F" }}
                >
                  Our Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link me-2"
                  to="/contact"
                  style={{ color: "#56E39F" }}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link me-2"
                  to="/about"
                  style={{ color: "#56E39F" }}
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-outline-dark shadow-none me-lg-3 me-2"
                onClick={() => {
                  navi("/login");
                }}
                style={{
                  color: "#56E39F",
                  borderColor: "#56E39F",
                  borderRadius: "20px",
                }}
              >
                <i className="bi bi-person-circle me-2"></i>
                Sign In
              </button>
              <button
                type="button"
                className="btn btn-outline-dark shadow-none"
                onClick={() => {
                  navi("/signup");
                }}
                style={{
                  color: "#56E39F",
                  borderColor: "#56E39F",
                  borderRadius: "20px",
                }}
              >
                <i className="bi bi-person-plus-fill me-2"></i>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <style>
        {`
      .btn-outline-dark:hover {
        color: #063F71 !important;
        background-color: #56E39F !important;
        border-color: #56E39F !important;
      }
      .color_18 {
        color: #56e39f;
      }
      .font_3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
      }
      .navbar-toggler {
        background-color: rgb(86, 227, 159);
      }
      @media (max-width: 992px) {
        .navbar-brand {
          font-size: 1.5rem;
        }
        .font_3 {
          font-size: 14px;
        }
      }
      @media (max-width: 768px) {
        .navbar-collapse {
          background-color: #032039;
        }
        .navbar-nav {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .navbar-toggler {
          margin-top: 10px;
        }
      }
      `}
      </style>
    </>
  );
}
