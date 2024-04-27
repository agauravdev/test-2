import React from "react";

export const Input = ({ element, formData, handleChange }) => {
  return (
    <div key={element.name} className="">
      <label htmlFor={element.name}>{element.label}</label>
      <input
        type="text"
        id={element.name}
        name={element.name}
        value={formData[element.name] || ""}
        placeholder={element.placeholder || ""}
        onChange={handleChange}
        required={element.required || false}
      />
    </div>
  );
};
