/** @format */

import React from "react";
import "./PortalButtonSet.css";
import { Row, Col, Button, Container } from "react-bootstrap";

// Props:
// - buttons[]. Array of objects. Each object has a "key" and a "label"
// - activeKey [String] - indicating which button is active (First Button by default)
// - handleClick. callback function. invoked when the user clicks on one of the buttons,
//      it sends the object of the clicked button

export const PortalButtonSet = props => {
  const { buttons, handleClick, activeKey } = props;
  // Mapping buttons[] to JSX items
  let buttonsComp = buttons.map(item => {
    // activeButton Logic
    let activeBtnClass = (activeKey === item.key) ? " active" : "";
    return (
      <Col className="c-buttonCol">
        <Button
          key={item.key}
          type="button"
          className={"btn" + activeBtnClass}
          variant="transparent"
          bg="white"
          onClick={() => handleClick(item)}
        >
          {item.label}
        </Button>
      </Col>
    );
  });



  return (
    <Container className="c-portalButtonSet" fluid>
      <Row className="justify-content-md-center">{buttonsComp}</Row>
    </Container>
  );
};

export default PortalButtonSet;