import React from "react";

export default function contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="my-5 px-5">
            <h1 className="fw-bold text-center custom-color">Contact Us</h1>
            <div className="h-line1 custom-color"></div>
            <p className="text-center mt-3 custom-color">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              laborum hic numquam debitis quaerat explicabo <br /> veritatis.
              Obcaecati, veniam? Laboriosam necessitatibus fugiat deleniti
              labore iure optio laudantium voluptates dolor odio suscipit.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-5 px-4 ">
            <div className="body-map">
              <iframe
                className="w-100 rounded mb-4 shadow"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13614.025735945812!2d74.2755957!3d31.4552522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045972400001%3A0x7066546ac8abe2e7!2sPureLogics!5e0!3m2!1sen!2s!4v1682599246149!5m2!1sen!2s"
                height="350px"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Map of Lahore, Punjab, Pakistan"
              ></iframe>
              <h5 className="custom-color-tag">Address</h5>
              <a
                href="https://goo.gl/maps/8dfxngbG3NnLhDwdA"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block text-white text-decoration-none"
              >
                <i className="bi bi-geo-alt-fill"></i> 874 R1 Johar Town,
                Lahore, Pakistan
              </a>
              <h5 className="mt-3 custom-color-tag">Contact Us</h5>
              <a
                href="tel:+923001234567"
                className="d-inline-block text-decoration-none mb-2 text-white"
              >
                <i className="bi bi-telephone-fill"></i>+923001234567
              </a>

              <h5 className="mt-2 custom-color-tag">Email</h5>
              <a
                href="mailto:bc180200378@vu.edu.pk"
                className="d-inline-block text-decoration-none text-white"
              >
                <i className="bi bi-envelope-fill"></i> usamahafeez567@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-5 px-4">
            <div className="body-map">
              <form>
                <h4 className="custom-color-tag">Let's Get In Touch</h4>
                <div className="mt-3">
                  <label className="form-label custom-color-tag">Name:</label>
                  <input type="text" className="form-control rounded-pill" />
                </div>
                <div className="mt-3">
                  <label className="form-label custom-color-tag">Email:</label>
                  <input type="email" className="form-control rounded-pill" />
                </div>
                <div className="mt-3">
                  <label className="form-label custom-color-tag">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="typePhone"
                    className="form-control rounded-pill"
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label custom-color-tag">
                    Comment:
                  </label>
                  <textarea
                    className="form-control custom-com"
                    rows="7"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn mt-4 custom-btn rounded-pill"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .h-line1 {
            width: 150px;
            margin: 0 auto;
            height: 1.7px;
            background-color: #56e39f;
          }
          .custom-color {
            color: #56e39f;
          }
          .body-map {
            padding: 50px 80px 50px 80px;
            border-radius: 15px;
            box-shadow: 0 0.2rem 0.9rem rgba(0, 0, 0, 0.55);
          }
          .custom-color-tag{
           color: #56e39f;
          }
          .custom-btn:hover {
           color: #063f71 !important;
           background-color: #56e39f !important;
           border-color: #56e39f !important;
          }
          .custom-btn{      
            color: #56E39F;
            background-color: #063F71;
            border: 1px solid #56E39F;
            border-radius: 20px;
            }
        `}
      </style>
    </>
  );
}
