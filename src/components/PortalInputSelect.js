/** @format */

import React from "react";
import "../components/PortalInputSelect.css";

import React from "react";

// <PortalInputSelect /> props:
//  - inputTitle (String) - will be rendering the Title Lable  - *not Required  | e.g.- "gender"
//  - options[] - array of  Obj option{key : value, label: value}  >>  e.g. - [{key: "0", label: "male"}, {key: "1", label: "female"}, {key: "2",label: "undefined"}]
//  - optionsKey (String) - Renders the value for this key  >>  e.g - "0"
//  - handleSelection( ) - callback function. sends the object of the selected option. 

const PortalInputSelect = props => {
  const { inputTitle, options, optionsKey } = props;
  const [inputSelectValue, setInputSelectValue] = useState(optionsKey);

// mapping the options arr[] to JSX options elements for rendering 
  const selectInputOptions = options.map(item => {
    <option key={item.key} value={item.key}>{item.label}</option>
  });

  return (
    <div className="c-portal-input-select">
      <label className="c-portal-input-select-label">{inputTitle}</label>
      <select
        className="c-portal-inputselect-element"
        value={inputSelectValue}
        onChange={event => {
          setInputSelectValue(event.target.value);
          handleChange(event.target.value);
        }}
      >
        {selectInputOptions}
      </select>
    </div>
  );
};

export default PortalInputSelect;
