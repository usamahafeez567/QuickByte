import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login(props) {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);

  function validate() {
    let emailError = "";
    let passwordError = "";

    if (!email.includes("@")) {
      emailError = "Invalid email";
    }

    if (password.length < 8) {
      passwordError = "Password must be at least 8 characters";
    }

    setEmailError(emailError);
    setPasswordError(passwordError);

    if (emailError || passwordError) {
      return false;
    }

    return true;
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setEmailError("");
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setPasswordError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const isValid = validate();
    if (isValid) {
      try {
        const response = await fetch(
          "http://localhost:5001/api/userAuth/signin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );
        const data = await response.json();
        // console.log(data, "userLoggedIn");
        if (response.status === 400) {
          // show error message that user doesn't exist
          // console.log(data.message);
          setModalMessage(data.message);
          setShowModal(true);
        } else {
          // Show login successfully
          toast.success("User Login Successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
          });
          // user exists, route to dashboard
          setTimeout(() => {
            navi("/dashboard");
          }, 2000);
        }
      } catch (error) {
        // console.log(error);
        setShowModal(true);
        setModalMessage(error.message);
      }
    }
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12 mt-5 body-login">
            <h1
              className="text-center fw-bold mb-2"
              style={{ color: "#56E39F" }}
            >
              Welcome!
            </h1>
            <p className="mb-4 fs-5 mt-3" style={{ color: "#56E39F" }}>
              Sign up or log in to continue
            </p>
            {/* Bootstrap Alert */}
            {emailError || passwordError ? (
              <div className="alert custom-alert" role="alert">
                {emailError && <p>{emailError}</p>}
                {passwordError && <p>{passwordError}</p>}
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ color: "#56E39F" }}
                >
                  <i className="bi bi-envelope-fill me-2"></i>
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control mt-1 rounded-pill"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3" style={{ color: "#56E39F" }}>
                <label htmlFor="password" className="form-label">
                  <i className="bi bi-lock-fill me-1"></i>
                  Password:
                </label>
                <input
                  placeholder="Enter your password"
                  type="password"
                  className="form-control mt-1 rounded-pill"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {/* Button */}
              <button
                className="btn btn-light mt-3"
                onClick={() => navi("/signup")}
                style={{
                  color: "#56E39F",
                  backgroundColor: "#063F71",
                  borderColor: "#56E39F",
                  borderRadius: "20px",
                }}
              >
                Don't have an account? Register here!
              </button>
              <br />
              <button
                className="btn btn-light mt-3"
                type="submit"
                style={{
                  color: "#56E39F",
                  backgroundColor: "#063F71",
                  borderColor: "#56E39F",
                  borderRadius: "20px",
                }}
              >
                Login
              </button>
              {/* Modal Feature */}
              <div>
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header className="custom-modal">
                    <Modal.Title>
                      <i className="bi bi-exclamation-triangle-fill me-2"></i>
                      Wrong Credentials
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="custom-modal">
                    {modalMessage}
                  </Modal.Body>
                  <Modal.Footer className="custom-modal">
                    <Button
                      className="btn btn-modal"
                      style={{
                        color: "#56E39F",
                        backgroundColor: "#063F71",
                        borderColor: "#56E39F",
                      }}
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              {/* toast error handling */}
              <div>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>
        {`
        
      .btn-light:hover {
        color: #063f71 !important;
        background-color: #56e39f !important;
        border-color: #56e39f !important;
      }
      .container {
        position: relative;
        width: 100%;
      }
      
      .body-login {
        padding: 60px 80px 60px 80px;
        border-radius: 20px;
        box-shadow: 0 0.2rem 0.9rem rgba(0, 0, 0, 0.55);
      }
      .custom-alert{
        background-color: #56E39F;
        color: #032039;
      }
      .custom-modal {
        color: #032039;
        background-color: #56E39F;
      }
      .btn-modal:hover {
        color: #063f71 !important;
        background-color: #56e39f !important;
        border-color: #063f71 !important;
      }
    `}
      </style>
    </>
  );
}
