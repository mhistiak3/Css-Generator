import React from "react";
import { InputBox } from "../GlobalStyle";

const InputRange = ({ title, value, max, handleChange }) => {
  return (
    <InputBox>
      <label htmlFor={title}>{title} ({value})</label>
      <input
        type="range"
        id={title}
        min="0"
        max={max}
        onChange={handleChange}
        value={value}
      />
    </InputBox>
  );
};

export default InputRange;
