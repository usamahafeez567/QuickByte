import React from "react";
import image from "../Assets/image/egrocery.jpg";
import rider from "../Assets/image/rider.png";
import mobile from "../Assets/image/veg.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navi = useNavigate();
  return (
    <>
      {/* Section 3 */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3">
            <h1
              className="font_0 mt-5"
              style={{ fontSize: "80px", lineHeight: "1em" }}
            >
              <span
                style={{
                  fontSize: "70px",
                  color: "#56e39f",
                }}
              >
                Effortless Shopping.
              </span>
              <br />
              <span
                style={{
                  fontSize: "60px",
                  letterSpacing: "0em",
                  color: "#FFFFFF",
                }}
              >
                In the moment.
              </span>
            </h1>
            <p className="h1-color mt-4">
              The future of supermarkets is here. Fresh products & favorite
              local brands delivered before the water boils.
            </p>
            <button
              onClick={() => navi("/product")}
              className="btn h1-color btn-color-custom rounded-pill"
            >
              View More
            </button>
          </div>

          <div className="col-lg-8 col-md-12 mb-9">
            <img
              src={image}
              alt="A colorful abstract pattern"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <br />
      {/* Section 2 */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <img
              src={rider}
              alt="A colorful abstract pattern"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-4">
            <h1
              className="font_0 mt-5"
              style={{ fontSize: "80px", lineHeight: "1em" }}
            >
              <span
                style={{
                  fontSize: "70px",
                  color: "#56e39f",
                }}
              >
                Satisfy Your Cravings, ASAP!
              </span>
              <br />
              <span
                style={{
                  fontSize: "60px",

                  color: "#FFFFFF",
                }}
              >
                In the moment.
              </span>
            </h1>
            <p className="h1-color mt-4">
              We commit to use our Sustainability Strategy to inspire and lead
              every step of our decision-making and goal-setting , so that
              together we can achieve the positive impact we want to see in the
              world.
            </p>
            <div
              onClick={() => navi("/product")}
              className="btn h1-color btn-color-custom rounded-pill"
            >
              View More
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3">
            <h1
              className="font_0 mt-5"
              style={{ fontSize: "80px", lineHeight: "1em" }}
            >
              <span
                style={{
                  fontSize: "70px",
                  color: "#56e39f",
                }}
              >
                Rapid Solutions for Hungry Moments!
              </span>
              <br />
              <span
                style={{
                  fontSize: "60px",

                  color: "#FFFFFF",
                }}
              >
                In the moment.
              </span>
            </h1>
            <p className="h1-color mt-4">
              The future of supermarkets is here. Fresh products & favorite
              local brands delivered before the water boils.
            </p>
            <div
              onClick={() => navi("/product")}
              className="btn h1-color btn-color-custom rounded-pill"
            >
              View More
            </div>
          </div>

          <div className="col-lg-8 col-md-12 mb-9">
            <img
              src={mobile}
              alt="A colorful abstract pattern"
              className="img-fluid img-custom"
            />
          </div>
        </div>
      </div>
      <style>
        {`
          .h1-color {
            color: #56e39f;
          }
          .btn-color-custom
          {
            border: 1px solid #56e39f;
          }
          .btn-color-custom:hover {
            color: #063f71 !important;
            background-color: #56e39f !important;
            border-color: #56e39f !important;
          }
        `}
      </style>
    </>
  );
}
