import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phone || !comment) {
      toast.error(
        "Error: Form inputs are invalid, Please enter valid inputs!",
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }

    fetch("http://localhost:5001/api/form/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, comment }),
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Feedback submitted successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
          });
          // Reset form inputs
          setName("");
          setEmail("");
          setPhone("");
          setComment("");
        } else {
          toast.error("Failed to submit form.", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        toast.error("Failed to submit form.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4 className="custom-color-tag">Let's Get In Touch</h4>
        <div className="mt-3">
          <label className="form-label custom-color-tag">Name:</label>
          <input
            type="text"
            className="form-control rounded-pill"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="form-label custom-color-tag">Email:</label>
          <input
            type="email"
            className="form-control rounded-pill"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="form-label custom-color-tag">Phone Number:</label>
          <input
            type="tel"
            id="typePhone"
            className="form-control rounded-pill"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="form-label custom-color-tag">Comment:</label>
          <textarea
            className="form-control custom-com"
            rows="7"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn mt-4 custom-btn rounded-pill">
          Submit
        </button>
        {/* toast error handling */}
        <div>
          <ToastContainer />
        </div>
      </form>
    </>
  );
}
