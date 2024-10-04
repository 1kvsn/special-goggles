import React from "react";

const InputField = ({
  value,
  onChange,
  onKeyUp = () => {},
  placeholder = "Type here...",
}) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyUp={onKeyUp}
  />
);

export default InputField;
