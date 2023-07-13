import React from "react";
import Line from "./helper/line";

export default function faqs() {
  return (
    <>
      <div>
        <Line />
      </div>
      <div className="container">
        <div className="row">
          <h1 className="custom-color-tg">
            Order food and groceries online from the best restaurants and shops
            on QuickByte
          </h1>
          <h3 className="custom-color-tg mt-2">Frequently Asked Questions</h3>
        </div>
      </div>
      <div className="accordion mt-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button custom-color-tg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Question No 1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body custom-color-tg">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                maiores ab, voluptatum nihil, praesentium autem consectetur
                explicabo at quia ipsa esse quas inventore provident repellat
                laudantium. Voluptatem itaque quis nemo. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Sed, maiores ab, voluptatum
                nihil, praesentium autem consectetur explicabo at quia ipsa esse
                quas inventore provident repellat laudantium. Voluptatem itaque
                quis nemo.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header custom-color-tg" id="headingTwo">
            <button
              className="accordion-button custom-color-tg collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Question No 2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body custom-color-tg">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                maiores ab, voluptatum nihil, praesentium autem consectetur
                explicabo at quia ipsa esse quas inventore provident repellat
                laudantium. Voluptatem itaque quis nemo. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Sed, maiores ab, voluptatum
                nihil, praesentium autem consectetur explicabo at quia ipsa esse
                quas inventore provident repellat laudantium. Voluptatem itaque
                quis nemo.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header custom-color-tg" id="headingThree">
            <button
              className="accordion-button custom-color-tg collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Question No 3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body custom-color-tg">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                maiores ab, voluptatum nihil, praesentium autem consectetur
                explicabo at quia ipsa esse quas inventore provident repellat
                laudantium. Voluptatem itaque quis nemo. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Sed, maiores ab, voluptatum
                nihil, praesentium autem consectetur explicabo at quia ipsa esse
                quas inventore provident repellat laudantium. Voluptatem itaque
                quis nemo.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button custom-color-tg collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Question No 4
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body custom-color-tg">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                maiores ab, voluptatum nihil, praesentium autem consectetur
                explicabo at quia ipsa esse quas inventore provident repellat
                laudantium. Voluptatem itaque quis nemo. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Sed, maiores ab, voluptatum
                nihil, praesentium autem consectetur explicabo at quia ipsa esse
                quas inventore provident repellat laudantium. Voluptatem itaque
                quis nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        h1{
          font-size: 45px;
          color: #56e39f;
        }
        .custom-color-tg{
          color: #56e39f !important;
        }
        .accordion-item{
          background-color: #063f71 !important;
        }
        .accordion-button{
          background-color: #063f71 !important;
        }
        .accordion{
          --bs-accordion-border-color: #56e39f !important;
        }
        `}
      </style>
    </>
  );
}
