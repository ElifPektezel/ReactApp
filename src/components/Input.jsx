import React from "react";
import '../style/Input.css';

const Input = ({ placeholder, type, name, id, onChange }) => {
  return (
    <input
      className="ModalInput"
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      onChange={onChange}
    />
  );
};

export default Input;
