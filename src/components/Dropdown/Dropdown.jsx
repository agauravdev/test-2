import React from "react";

export const Dropdown = ({ element, formData, handleChange }) => {
  return (
    <div key={element.name}>
      <label htmlFor={element.name}>{element.label}</label>
      <select
        id={element.name}
        name={element.name}
        value={formData[element.name] || ""}
        onChange={handleChange}
        required={element.required || false}
      >
        <option value="" disabled>
          Select an option
        </option>
        {element.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
