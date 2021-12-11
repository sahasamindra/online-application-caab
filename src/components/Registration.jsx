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
  const [pageTitle, setPageTitle] = useState("Sign Up");
  const [pageSubTitle, setPageSubTitle] = useState("Registration Page");

  const [activeForm, setaActiveForm] = useState("form1");
  const [eyeClose, setEyeClose] = useState(true);
  const [eyeReClose, setEyeReClose] = useState(true);

  //Form-1 Values
  const [selectedFlag, setSelectedFlag] = useState("bd");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+880");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [termAgreement, setTermAgreement] = useState(false);

  //Form-2 Value
  const [OTP, setOTP] = useState("");

  const handleSelection = (data) => {
    // console.log(`${data.substring(3).toLowerCase()}.svg`);
    setSelectedFlag(data.substring(0, 2).toLowerCase());
    setSelectedCountryCode(data.substring(3).toLowerCase());
  };

  const handleFormSubmit = (nextForm) => {
    setaActiveForm(nextForm);
    if (nextForm === "form2") {
      console.log(activeForm);
      console.log(name);
      console.log(email);
      console.log(mobile);
      console.log(password);
      console.log(rePassword);
      console.log(termAgreement);

      setPageTitle("OTP Verification");
      setPageSubTitle("A 6 Digit Verification Code Has Been Sent");
    } else {
      setPageTitle("Success");
      setPageSubTitle("Awesome");
      console.log(activeForm);
      console.log(OTP);
    }
  };

  const eye = <FontAwesomeIcon icon={faEye} style={{ color: "#0979F9" }} />;
  const eyeSlash = (
    <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#0979F9" }} />
  );

  // const checkIcon = <FontAwesomeIcon icon={faCheck} />;

  return (
    <div className="card-layout">
      <div className="page-title">{pageTitle}</div>
      <div className="page-subtitle">{pageSubTitle}</div>
      <div className="step-container">
        <StepWrapper activeForm={activeForm} />
      </div>

      {activeForm === "form1" ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit("form2");
          }}
        >
          <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Label className="fw-bold">
              Name<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter Name Here"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label className="fw-bold">
              Email address<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email Here"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
                  type="number"
                  placeholder={`${selectedCountryCode} XXXX-XXXXXX`}
                  onChange={(e) => setMobile(e.target.value)}
                  required
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
                onChange={(e) => setPassword(e.target.value)}
                required
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
              Use 8 Or More Characters With A Mix Of Letters, Numbers &amp;
              Symbol
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
                onChange={(e) => setRePassword(e.target.value)}
                required
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
              onChange={(e) => setTermAgreement(e.target.checked)}
              required
            />
            <a className="a-tag" href="termsAndConditions">
              Terms &amp; Conditions
            </a>
          </Form.Group>

          <Button
            className="col-12 mt-2 fw-bold"
            variant="primary"
            type="submit"
          >
            Next
          </Button>
        </Form>
      ) : null}

      {activeForm === "form2" ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit("form3");
            handleFormSubmit("form4");
          }}
        >
          <Form.Group className="mb-1">
            <Form.Label className="fw-bold">Verification Code</Form.Label>
            <Row>
              <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
                <Form.Control
                  type="text"
                  className="text-center"
                  maxLength="1"
                  required
                  onChange={(e) => setOTP(`${OTP}${e.target.value}`)}
                />
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
                <Form.Control
                  type="text"
                  className="text-center"
                  maxLength="1"
                  required
                  onChange={(e) => setOTP(`${OTP}${e.target.value}`)}
                />
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
                <Form.Control
                  type="text"
                  className="text-center"
                  maxLength="1"
                  required
                  onChange={(e) => setOTP(`${OTP}${e.target.value}`)}
                />
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
                <Form.Control
                  type="text"
                  className="text-center"
                  maxLength="1"
                  required
                  onChange={(e) => setOTP(`${OTP}${e.target.value}`)}
                />
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
                <Form.Control
                  type="text"
                  className="text-center"
                  maxLength="1"
                  required
                  onChange={(e) => setOTP(`${OTP}${e.target.value}`)}
                />
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
                <Form.Control
                  type="text"
                  className="text-center"
                  maxLength="1"
                  required
                  onChange={(e) => setOTP(`${OTP}${e.target.value}`)}
                />
              </Col>
            </Row>
            <p className="text-md">This Code Active For 5 Minutes</p>
          </Form.Group>
          <Button
            className="col-12 mt-3 fw-bold"
            variant="primary"
            type="submit"
          >
            Next
          </Button>
          {/* <div className="row mt-2">
            
          </div> */}
          <div className="d-flex justify-content-center mt-2 fw-bold">
            <p className="text-md">I Didn't Get Any Code.</p>&nbsp;
            <p
              type="button"
              className="text-md text-md-underline"
              onClick={() => console.log("Resend verification Code Logic")}
            >
              RESEND CODE (5)
            </p>
          </div>
        </Form>
      ) : null}

      {activeForm === "form4" ? (
        <>
          <p className="text-md fw-bold">
            Your Account Has Been Created Successfully
          </p>
          <Button
            className="col-12 fw-bold mt-3"
            variant="primary"
            type="button"
            onClick={() => console.log("Implement Login Logic")}
          >
            Login
          </Button>
        </>
      ) : null}
    </div>
  );
}

export default Registration;
