/** @format */

import React, { useState } from "react";
import "../components/PortalInput.css";

// <PortalInput/> Component Props:
//  - inputTitle (String) - will be rendering the Title Lable  - *not Required
//  - inputPlaceholder (String) - will be rendering the input Placeholder
//  - handleChange () - callback from Parent page/component

 const PortalInput = (props) => {
  const {inputTitle, inputPlaceholder, handleChange} = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="c-portal-input">
      <label className="c-portal-input-label">{inputTitle}</label>
      <input
        className="c-portal-input-element"
        value={inputValue}
        placeholder={inputPlaceholder}
        onChange={event => {
          setInputValue(event.target.value);
          handleChange(event.target.value);
        }}
      />
    </div>
  );
};

export default PortalInput;