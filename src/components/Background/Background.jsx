import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./background.css";

function Background(props) {
  const { children } = props;
  return (
    <Container fluid>
      <Row>
        <Col xl={7} ld={7} md={7} sm={12} className="position-relative">
          {children}
        </Col>
        <Col className="col-bg"></Col>
      </Row>
    </Container>
  );
}

export default Background;
