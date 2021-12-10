import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./registration.css";
import StepWrapper from "./StepProgress/StepWrapper";
import { CountryCode } from "./CountryCode/CountryCode";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import flagImage from "../assets/flags/bd.svg";

function Registration() {
  const [selectedFlag, setSelectedFlag] = useState("bd");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+880");
  const [eyeClose, setEyeClose] = useState(true);
  const [eyeReClose, setEyeReClose] = useState(true);

  const handleSelection = (data) => {
    // console.log(`${data.substring(3).toLowerCase()}.svg`);
    setSelectedFlag(data.substring(0, 2).toLowerCase());
    setSelectedCountryCode(data.substring(3).toLowerCase());
  };

  const eye = <FontAwesomeIcon icon={faEye} style={{ color: "#0979F9" }} />;
  const eyeSlash = (
    <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#0979F9" }} />
  );

  // const checkIcon = <FontAwesomeIcon icon={faCheck} />;

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

        <Form.Group className="mb-2">
          <Form.Label className="fw-bold">
            Mobile Number<span className="text-danger">*</span>
          </Form.Label>
          {/* <Form.Control type="tel" placeholder="Enter Mobile Here" /> */}

          <Row>
            <Col xxl={2} xl={2} lg={2} md={2} sm={6} xs={6}>
              <Image
                className="form-text"
                src={`assets/flags/${selectedFlag}.svg`}
                fluid
              />
            </Col>

            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={6}>
              <Form.Select onChange={(e) => handleSelection(e.target.value)}>
                {CountryCode.map((country, index) => (
                  <option key={index}>
                    {`${country.code} ${country.dial_code}`}
                  </option>
                ))}
              </Form.Select>
            </Col>

            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
              <Form.Control
                type="tel"
                placeholder={`${selectedCountryCode} XXXX-XXXXXX`}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label className="fw-bold">
            Password<span className="text-danger">*</span>
          </Form.Label>
          <InputGroup>
            <FormControl
              type={!eyeClose ? "text" : "password"}
              placeholder="Enter Password Here"
            />
            <InputGroup.Text
              id="basic-addon1"
              onClick={() => setEyeClose(!eyeClose)}
            >
              {eyeClose ? eyeSlash : eye}
            </InputGroup.Text>
          </InputGroup>

          {/* <Form.Control type="password" placeholder="Enter Password Here" /> */}
          <p className="text-sm">
            Use 8 Or More Characters With A Mix Of Letters, Numbers &amp; Symbol
          </p>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicRePassword">
          <Form.Label className="fw-bold">
            Re-Password<span className="text-danger">*</span>
          </Form.Label>
          <InputGroup>
            <FormControl
              type={!eyeReClose ? "text" : "password"}
              placeholder="Enter Re-Password Here"
            />
            <InputGroup.Text
              id="basic-addon1"
              onClick={() => setEyeReClose(!eyeReClose)}
            >
              {eyeReClose ? eyeSlash : eye}
            </InputGroup.Text>
          </InputGroup>
          {/* <Form.Control type="password" placeholder="Enter Re-Password Here" /> */}
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
