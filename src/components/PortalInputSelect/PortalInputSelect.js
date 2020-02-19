/** @format */

import React, { useState } from "react";
import "../PortalInputSelect/PortalInputSelect.css";

// <PortalInputSelect /> props:
//  - inputTitle (String) - will be rendering the Title Lable  - *not Required  | e.g.- "gender"
//  - options[] - array of  Obj option{key : value, label: value}  >>  e.g. - [{key: "0", label: "male"}, {key: "1", label: "female"}, {key: "2",label: "undefined"}]
//  - optionsKey (String) - Renders the value for this key  >>  e.g - "0"
//  - handleSelection( ) - callback function. sends the object of the selected option. 

const PortalInputSelect = props => {
  const { inputTitle, options, optionsKey, handleSelection} = props;
  const [inputSelectValue, setInputSelectValue] = useState(optionsKey);

// mapping the options arr[] to JSX options elements for rendering 
  const selectInputOptions = options.map(item => {
    return(<option key={item.key} value={item.key}>{item.label}</option>)
  });
  let labelOn =  <span></span>
  if(inputTitle){
    labelOn = <label className="c-portal-input-select-label">{inputTitle}</label>
  }
  return (
    <div className="c-portal-input-select">
      {labelOn}
      <select
        className="c-portal-input-select-element"
        value={inputSelectValue}
        onChange={event => {
          setInputSelectValue(event.target.value);
          // console.log(event.target.value);
          handleSelection(options.find(option => option.key === event.target.value));
        }}
      >
        {selectInputOptions}
      </select>
    </div>
  );
};

export default PortalInputSelect;