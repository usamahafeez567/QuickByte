import React from "react";

export default function Card(props) {
    return (
        <div className="container fluid">
            <div className="row row-2">
                <div className="col-lg-4 col-md-12 mb-3">
                    <h1
                        className="font_0 mt-5"
                        style={{
                        fontSize: "50px",
                        lineHeight: "1.5em",
                        textAlign: "left"
                    }}>
                        <span
                            style={{
                            fontSize: "50px",
                            color: "#032039"
                        }}>
                            {props.name}
                        </span>

                        <br/>
                    </h1>
                    <p className="h1-color mt-4">
                        {props.text}
                    </p>

                </div>

                <div className="col-lg-8 col-md-12 mb-9">
                    <img className="usama-img" src={props.img} alt="usama"/>
                </div>
            </div>
        </div>
    )

}