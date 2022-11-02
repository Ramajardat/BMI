import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <>
        <div className="row">
          <h3>BMI = {this.props.ramaBmi}</h3>
        </div>
        <div className="row">
          <h3>{this.props.bmiClass}</h3>
        </div>
      </>
    );
  }
}

export default Box;
