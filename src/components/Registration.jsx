import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./registration.css";
import StepWrapper from "./StepProgress/StepWrapper";
import { CountryCode } from "./CountryCode/CountryCode";

function Registration() {
  const [mobile, setMobile] = useState();
  return (
    <div className="card-layout">
      <div className="page-title">Sign Up</div>
      <div className="page-subtitle">Registration Page</div>
      <div className="step-container">
        <StepWrapper />
      </div>

      <Form>
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label className="fw-bold">
            Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Please Enter Name Here" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label className="fw-bold">
            Email address<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter Email Here" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicMobile">
          <Form.Label className="fw-bold">
            Mobile Number<span className="text-danger">*</span>
          </Form.Label>
          {/* <Form.Control type="tel" placeholder="Enter Mobile Here" /> */}

          <Row>
            <Col md={4}>
              <Form.Select>
                {CountryCode.map((country, index) => (
                  <option key={index}>
                    {`${country.code} ${country.dial_code}`}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={8}>
              <Form.Control type="tel" placeholder="Enter Mobile Here" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label className="fw-bold">
            Password<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control type="password" placeholder="Enter Password Here" />
          <p className="text-sm">
            Use 8 Or More Characters With A Mix Of Letters, Numbers &amp; Symbol
          </p>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicRePassword">
          <Form.Label className="fw-bold">
            Re-Password<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control type="password" placeholder="Enter Re-Password Here" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Creating An Account You Agree With Our"
          />
          <a className="a-tag" href="test">
            Terms &amp; Conditions
          </a>
        </Form.Group>
        <Button className="col-12 fw-bold" variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </div>
  );
}

export default Registration;
