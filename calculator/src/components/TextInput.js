import React, { Component, useState } from "react";

function TextInput(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setValue(inputValue);
    props.onChange(event.target.value);
    console.log(props.onChange);
  };

  return (
    <div className="card">
      <label>{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInput;
