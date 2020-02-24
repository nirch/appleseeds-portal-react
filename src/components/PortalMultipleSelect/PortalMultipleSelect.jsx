// @flow

import React from "react";
import Select, { components } from "react-select";
import { colourOptions } from "./data";
import "./PortalMultipleSelect.css";
import CreatableSelect from "react-select/creatable";

const ControlComponent = props => (
  <div>
    {<p>פרויקטים</p>}
    <div className="myControl">
      <components.Control {...props} />
    </div>
  </div>
);

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <span className="bold">+</span>
    </components.DropdownIndicator>
  );
};

export default () => (
  <div className="selectbox">
    <Select
      closeMenuOnSelect={false}
      components={{
        DropdownIndicator,
        Control: ControlComponent
        // IndicatorSeparator
      }}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      placeholder={"בחר"}
      isMulti
      options={colourOptions}
    />
    <CreatableSelect
      isMulti
      // onChange={this.handleChange}
      options={colourOptions}
    />
  </div>
);
