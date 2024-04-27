import React, {useEffect, useState} from "react";
import { Input } from "../Input/Input";
import { Checkbox } from "../Checkbox/Checkbox";
import { Dropdown } from "../Dropdown/Dropdown";
import { Chips } from "../Chips/Chips";
import {MultiInput } from "../MultiInput/MultiInput";
import {returnComponents} from "../../returnComponents";

export const Form = ({ config, onChange, layout, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});


  // ye chal raha hai.. bas strings concatenate nai hori hai..
  // the parent object is storing the child form's data as an object

  // the handlechange function can have just have key value pair
  // and i can send the key value from the component function


  useEffect(() => {
    onChange && onChange(formData);
  }, [formData]);

  const handleChange = (event, fieldName, val) => {

    if (fieldName && val) {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: val,
        }));
        return;
    }

    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      const updatedData = { ...formData };
      if (!updatedData[name]) {
        updatedData[name] = [];
      }
      if (checked) {
        updatedData[name] = [...updatedData[name], value];
      } else {
        updatedData[name] = updatedData[name].filter((item) => item !== value);
      }
      setFormData(updatedData);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    let formIsValid = true;
    const newErrors = {};

    config.forEach((ele) => {
      if (ele.required && !formData[ele.name]) {
        newErrors[ele.name] = `${ele.label} field is required.`;
        formIsValid = false;
      }
      if (ele.type === "text") {
        if (
          ele.validation &&
          ele.validation.minLength &&
          formData[ele.name]?.length < ele.validation.minLength
        ) {
          newErrors[
            ele.name
          ] = `Minimum ${ele.validation.minLength} characters required.`;
          formIsValid = false;
        }
        if (
          ele.validation &&
          ele.validation.maxLength &&
          formData[ele.name]?.length > ele.validation.maxLength
        ) {
          newErrors[
            ele.name
          ] = `Maximum ${ele.validation.maxLength} characters allowed.`;
          formIsValid = false;
        }
      }
    });

    setErrors(newErrors);

    if (formIsValid) {
      onSubmit(formData);
      setFormData({});
    }
  };

  console.log(formData)
  return (
    <div style={{
        display: layout === "horizontal" ? "flex" : "block",
    }}>
      {config.map((ele, index) => {
        if (ele.rule) {
          if (ele.rule.condition){
            if (ele.rule.condition === '>') {
              if (Number(formData[ele.rule.key]) > ele.rule.value) {
                return <div key={index}>{returnComponents({ ele, handleChange, formData })}</div>;
              } else return null;
            } else return null;
          }
          else if (formData[ele.rule.key]?.includes(ele.rule.value)) {
            return <div key={index}>{returnComponents({ ele, handleChange, formData })}</div>;
          } else {
            return null;
          }
        }
        return <div key={index}>{returnComponents({ ele, handleChange, formData })}</div>;
      })}
      {onSubmit && <button onClick={handleSubmit}>Submit</button> }

      {Object.keys(errors).map((key) => (
        <div key={key} style={{ color: "red" }}>
          {errors[key]}
        </div>
      ))}
    </div>
  );
};

// I am not sure how to handle the data when it is coming from the child.
// in the console I can see that both forms have their own state

// I want to concatenate the strings and store it in the main key value pair.
