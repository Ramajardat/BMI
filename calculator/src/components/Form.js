// import React from "react";
import React, { Component } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import Box from "./Box";
import Nav from "./Nav";
import Footer from "./Footer";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   weight: 0,
      //   height: 0,
      //   bmiClass: " ",
      //   bmi: 0,
    };
    // this.weightChange = this.weightChange.bind(this);
    // this.heightChange = this.heightChange.bind(this);
  }

  weightChanged = (weightValue) => {
    this.setState({ weight: weightValue });
  };

  heightChanged = (heightValue) => {
    this.setState({ height: heightValue });
  };

  computeBmi = () => {
    let bmiValue =
      (this.state.weight / this.state.height / this.state.height) * 10000;
    this.setState({ bmi: bmiValue });
    let bmiClass = this.getBmi(bmiValue);
    this.setState({ bmiClass: bmiClass });
  };

  getBmi(bmi) {
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

  render() {
    return (
      <div>
        <Nav />

        <div className="row m-2">
          <TextInput
            label="Height"
            placeholder="Enter height in meters"
            onChange={this.heightChanged}
          />
        </div>
        <div className="row m-2">
          <TextInput
            label="Weight"
            placeholder="Enter weight in kg"
            onChange={this.weightChanged}
          />
        </div>

        <div className="row m-2">
          <Button label="SUBMIT" onClick={this.computeBmi} />
        </div>

        <div>
          <Box ramaBmi={this.state.bmi} bmiClass={this.state.bmiClass} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Form;
