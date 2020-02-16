import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./search.css";

const PortalSearchPager = props => {
  const { placeholder, pages, currentPage, handleSearch, pageChange } = props;
  const [input, setInput] = useState("");
  const [currPage, setCurrPage] = useState(currentPage);

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
      //2
      setCurrPage(currPage + 1);
      console.log(currPage);
      pageChange(currPage);
    }
  };

  // Function that sends the currPage value as a callback to the parent component
  // after pressing the nex page button
  const decreasePageIndicator = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
      console.log(currPage);
      pageChange(currPage);
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
    <Container className="c-search">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <div className="search-comp">
            <Form.Control
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
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PortalSearchPager;
