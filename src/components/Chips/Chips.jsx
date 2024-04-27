import React from "react";
import { useState } from "react";

export const Chips = ({ element, handleChange }) => {
  const [selectedChips, setSelectedChips] = useState([]);

  const handleChipSelect = (id) => {
    if (selectedChips.includes(id)) {
      setSelectedChips(selectedChips.filter((chipId) => chipId !== id));
    } else {
      setSelectedChips([...selectedChips, id]);
      //   handleChange(selectedChips);
    }
  };

  return (
    <div className="">
      {element.options.map((ele) => (
        <button
          key={ele.id}
          className=""
          onClick={() => handleChipSelect(ele.id)}
        >
          {ele.label}
        </button>
      ))}
    </div>
  );
};
