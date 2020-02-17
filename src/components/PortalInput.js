/** @format */

import React, { useState } from "react";
import "../components/PortalInput.css";

// <PortalInput/> Component Props:
// inputTitle (String) - will be rendering the Title Lable  - *not Required
// inputPlaceholder (String) - will be rendering the input Placeholder
// handleChange () - callback from Parent page/component

export const PortalInput = props => {
  const {} = props;
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div className="c-portal-input">
      <lable className="c-portal-input-lable" />
      {props.inputTitle}

      <input
        className="c-portal-input-element"
        value={inputValue}
        placeholder={props.inputPlaceholder}
        onChange={event => {
          setInputValue(event.target.value);
          props.handleChange(event.target.value);
        }}
      />
    </div>
  );
};
