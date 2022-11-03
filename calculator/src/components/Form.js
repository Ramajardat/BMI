// import React from "react";
import React, { Component, useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import Box from "./Box";
import Nav from "./Nav";
import Footer from "./Footer";
const healthy = new URL("./Diet-amico.png", import.meta.url);

function Form() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiClass, setBmiClass] = useState("");
  const [bmi, setBmi] = useState(0);

  const weightChanged = (weightValue) => {
    setWeight(weightValue);
  };

  const heightChanged = (heightValue) => {
    setHeight(heightValue);
  };

  const computeBmi = () => {
    let bmiValue = (weight / height / height) * 10000;
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
  };

  function getBmi(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  }

  return (
    <div>
      <Nav />

      <div className="row m-2">
        <TextInput
          label="Height"
          placeholder="Enter height in meters"
          onChange={heightChanged}
        />
      </div>
      <div className="row m-2">
        <TextInput
          label="Weight"
          placeholder="Enter weight in kg"
          onChange={weightChanged}
        />
      </div>

      <div className="row m-2">
        <Button label="SUBMIT" onClick={computeBmi} />
      </div>

      <div>
        <Box ramaBmi={bmi} bmiClass={bmiClass} />
      </div>
      <div>
        <img
          src={healthy}
          alt=""
          height={"400px"}
          style={{ marginLeft: "600px" }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Form;
