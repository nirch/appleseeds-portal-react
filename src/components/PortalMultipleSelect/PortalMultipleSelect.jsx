import React from "react";
import "./PortalMultipleSelect.css";

// Generic component to use for multiple select options.

// PROPS:
// title.
// displaySelectList.
// hideSelectList.
// options. array of objects.
// selectedOptions. callback function. Gets called when the user adds/
//                  deletes options to/from the options array.
// addOption. callbak function. Gets called when the user selects an option
//            to add to the selectedOption from the options array.
// deleteOption. callbak function. Gets called when the user selects an option
//               to remove from the selectedOption back to the options array.
// deleteAllOptions. callbak function. Gets called when the user wants to remove
//                   all options from the selectedOption back to the options array.

//  Used in: ...

const PortalMultipleSelect = props => {
  const {
    label,
    displaySelectList,
    hideSelectList,
    options,
    selectedOptions,
    addOption,
    deleteOption,
    deleteAllOptions
  } = props;

  const optionsSelect = options.map((option, index) => (
    <div className="select-options" eventkey={index}>
      <div
        className="option-selected"
        onClick={() => {
          addOption(option);
        }}
      >
        {option.label}
      </div>
    </div>
  ));

  const selectedOptionsButtons = selectedOptions.map((button, index) => (
    <div className="option-selected-button" eventkey={index}>
      <div className="option-selected-button-label">{button.label}</div>
      <button
        className="option-del-btn"
        onClick={() => {
          deleteOption(index);
        }}
      >
        x
      </button>
    </div>
  ));

  let showHideSelectList = "";
  if (hideSelectList) {
    showHideSelectList = "options-select-list";
  } else showHideSelectList = "options-select-list options-select-list-show";

  return (
    <div className="c-select">
      <div className="c-label">{label}</div>
      <div className="options-container">
        <button
          className="show-select-list-btn"
          onClick={() => {
            displaySelectList();
          }}
        >
          +
        </button>
        <div>
          <div className="options-select-container">
            {selectedOptionsButtons}
          </div>
        </div>
        <button
          className="all-options-del-btn"
          onClick={() => {
            deleteAllOptions();
          }}
        >
          x
        </button>
      </div>
      <div className={showHideSelectList}>{optionsSelect}</div>
    </div>
  );
};

export default PortalMultipleSelect;
