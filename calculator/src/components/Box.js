import React, { Component } from "react";

function Box(props) {
  return (
    <>
      <div className="row">
        <h3>BMI = {props.ramaBmi}</h3>
      </div>
      <div className="row">
        <h3>{props.bmiClass}</h3>
      </div>
    </>
  );
}

export default Box;
