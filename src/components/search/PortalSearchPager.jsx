import React, { useState } from "react";
import "./search.css";

// Generic component to search and page between results.

// PROPS:
//  placeholder. string. the placeholder string for the search input
//  pages. number. the total number of pages the user can page through.
//         If this number is 0 do not render the paging on the left.
//  handleSearch. callback function. Gets called when the user submits (press enter)
//                on the search input. Sends the input text.
//  const handleSearch = searchInput => {
//  console.log(searchInput);
//  };
//  pageChange. callback function. Gets called when the user clicks on the page arrows.
//              Sends the new page number.
//  const pageChange = currPage => {
//  console.log(currPage);
//  };

//  Used in: USERS PAGE, COURSES PAGE

const PortalSearchPager = props => {
  const { placeholder, pages, handleSearch, pageChange } = props;
  const [input, setInput] = useState("");
  const [currPage, setCurrPage] = useState(1);

  //   Sets 50% opacity to the next/prev page buttons if the currPage is the first or the last page
  let prevPageClasses = ["prev-page"];
  if (currPage === 1) prevPageClasses.push("disabled");

  let nextPageClasses = ["prev-page"];
  if (currPage === pages) nextPageClasses.push("disabled");

  // Function that sends the input value as a callback to the parent component
  const ifEnterPressed = ev => {
    if (ev.keyCode === 13) {
      handleSearch(input);
    }
  };

  // Function that sends the currPage value as a callback to the parent component
  // after pressing the nex page button
  const increasePageIndicator = () => {
    if (currPage < pages) {
      const newCurrPage = currPage + 1;
      setCurrPage(newCurrPage);
      pageChange(newCurrPage);
    }
  };

  // Function that sends the currPage value as a callback to the parent component
  // after pressing the nex page button
  const decreasePageIndicator = () => {
    if (currPage > 1) {
      const newCurrPage = currPage - 1;
      setCurrPage(newCurrPage);
      pageChange(newCurrPage);
    }
  };

  let pageIndicator =
    pages && pages > 1 ? (
      <div className="absolute">
        <div className="page-indicator">
          <div
            className={prevPageClasses.join(" ")}
            onClick={decreasePageIndicator}
          >
            <img alt="Previous Page" src="images/arrow-right.png" />{" "}
          </div>
          <div>{currPage}</div>
          <div
            className={nextPageClasses.join(" ")}
            onClick={increasePageIndicator}
          >
            <img alt="Next Page" src="images/arrow-left.png" />
          </div>
        </div>
      </div>
    ) : null;

  return (
    <div className="c-search">
      <div className="search-comp">
        <input
          className="search-input"
          value={input}
          type="text"
          placeholder={placeholder}
          onChange={ev => setInput(ev.target.value)}
          onKeyDown={ev => ifEnterPressed(ev)}
          autoFocus
        />
        {pageIndicator}
      </div>
    </div>
  );
};

export default PortalSearchPager;
