import React from "react";
import Card from "./aboutUsStyling";
import data from "./data";
import Card2 from "./aboutUsStyling2";
export default function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="my-5 px-5">
            <h1 className="fw-bold text-center custom-color">About Us</h1>
            <div className="h-line2 custom-color"></div>
            <p className="text-center mt-3 custom-color">{data[2].text}</p>
          </div>
        </div>
      </div>
      <h1 className="fw-bold text-center custom-color starting">Our Team</h1>
      <Card name={data[0].name} img={data[0].imgUrl} text={data[0].text} />
      <Card2 name={data[1].name} img={data[1].imgUrl} text={data[1].text} />
      <style>
        {`
        .h-line2 {
          width: 150px;
          margin: 0 auto;
          height: 1.7px;
          background-color: #56e39f;
        }
        .custom-color {
          color: #56e39f;
        `}
      </style>
    </>
  );
}
