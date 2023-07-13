import React from "react";

export default function line() {
  return (
    <>
      <div className="mt-2 h-line4 custom-color3 mb-4"></div>
      <style>
        {`
        .h-line4 {
            width: 100%;
            margin: 0 auto;
            height: 1px;
            background-color: #56e39f;
          }
          .custom-color3 {
            color: #56e39f;
          }
        `}
      </style>
    </>
  );
}
