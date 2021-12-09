import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./background.css";

function Background(props) {
  const { children } = props;
  return (
    <>
      <Row>
        <Col xl={7} ld={7} md={7} sm={12} className="border-cl">
          {children}
        </Col>
        <Col className="col-bg"></Col>
      </Row>
    </>
  );
}

export default Background;
