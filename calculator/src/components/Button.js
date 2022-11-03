import React from "react";

function Button(props) {
  return (
    <button className="btn btn-outline-warning" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
