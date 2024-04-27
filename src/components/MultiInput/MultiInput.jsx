import React, {useEffect, useState} from "react";
import {returnComponents} from "../../returnComponents";

export const MultiInput = ({ element, handleChange }) => {
    // done.. working
    const [internalState, setInternalState] = useState({});
    useEffect(() => {
        handleChange(null, element.name, getValue());
    }, [internalState]);
    const getValue = () => {
        return element.fields.map(ele => {
            return internalState[ele.name] || '';
        }).join(" ")
    }

    const handleInternalChange = (e) => {
        const { name, value } = e.target;
        return setInternalState({...internalState, [name]: value});
    };

    console.log("here")

    return <div className="flex">
        {element.fields.map(ele => {
            return returnComponents({ele, handleInternalChange, internalState});
        })}
    </div>;
};
