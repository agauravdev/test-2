import React from "react";

export const Checkbox = ({ element, formData, handleChange }) => {
  if (element.options) {
    return (
      <div key={element.name}>
        <label>{element.label}</label>
        {element.options.map((option) => (
          <div key={option.value}>
            <input
              type="checkbox"
              id={option.value}
              name={element.name}
              value={option.value}
              checked={(formData[element.name] || []).includes(option.value)}
              onChange={handleChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div key={element.name}>
        <input
          type="checkbox"
          id={element.name}
          name={element.name}
          checked={formData[element.name] || false}
          onChange={handleChange}
        />
        <label htmlFor={element.name}>{element.label}</label>
      </div>
    );
  }
};
