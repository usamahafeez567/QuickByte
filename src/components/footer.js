import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bd-footer py-4 py-md-5 mt-5 custom-footer">
        <div className="container">
          {/* py-4 py-md-5 px-4 px-md-3 text-body-secondary */}
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 mb-3">
              <a
                className="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none"
                href="/"
                aria-label="Bootstrap"
              >
                <h2 className="custom-color">QuickByte</h2>
              </a>
              <p className="custom-section2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                excepturi nulla sint cumque placeat molestiae quasi possimus
                porro non similique quos quo qui eum, id, voluptatum cum optio
                cupiditate doloremque.
              </p>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 mb-3">
              <h5 className="custom-section">Section</h5>
              <ul className="nav custom-section flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="/"
                    className="nav-link p-0 text-body-secondary custom-color"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="/product"
                    className="nav-link p-0 text-body-secondary custom-color"
                  >
                    Product
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="/contact"
                    className="nav-link p-0 text-body-secondary custom-color"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="/faqs"
                    className="nav-link p-0 text-body-secondary custom-color"
                  >
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="/about"
                    className="nav-link p-0 text-body-secondary custom-color"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-5 mb-3 custom-section3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label className="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Email address"
                  />
                  <button
                    className="btn btn-custom"
                    style={{
                      color: "#56E39F",
                      borderColor: "#56E39F",
                      borderRadius: "20px",
                    }}
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-2 h-line3 custom-color1"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 mt-4">
              <p>© 2023 Company, Inc. All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 mt-4">
              <ul class="list-unstyled d-flex">
                <li class="ms-auto" href="/contact">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="bi bi-custom bi-facebook"></i>
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="bi bi-custom bi-instagram"></i>
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="bi bi-custom bi-linkedin"></i>
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="bi bi-custom bi-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <style>
        {`
        .custom-section{
          padding: 16px 35px 0px 35px;
        }
        .custom-section2{
          padding: 0px 30px 0px 30px;
        }
        .custom-section3{
          padding: 40px;
        }
        .custom-footer{
          background-color: #032039;
          color: #56E39F;
        }
        .custom-color{
          color: #56E39F !important;
        }
        .btn-custom:hover {
          color: #063F71 !important;
          background-color: #56E39F !important;
          border-color: #56E39F !important;
        }
        .h-line3 {
          width: 1310px;
          margin: 0 auto;
          height: 1px;
          background-color: #56e39f;
        }
        .custom-color1 {
          color: #56e39f;
        }
        .bi-custom{
          font-size: 1.6rem;
        }
        .bi-custom:hover{
          color: #56E39F !important;
        }
        `}
      </style>
    </>
  );
}
