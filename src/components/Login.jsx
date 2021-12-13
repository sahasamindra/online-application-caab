import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Background from "./Background/Background";

function Login() {
  //Login form values
  const [radioToggle, setRadioToggle] = useState(false);
  const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  //Font awesome initialization
  const eye = <FontAwesomeIcon icon={faEye} style={{ color: "#0979F9" }} />;
  const eyeSlash = (
    <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#0979F9" }} />
  );
  const [eyeClose, setEyeClose] = useState(true);
  const toggleRadio = () => {
    setRadioToggle(!radioToggle);
  };

  return (
    <Background>
      <div className="card-layout">
        <div className="page-title">Welcome</div>
        <div className="page-subtitle">Please Login To Continue</div>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(radioToggle);
            console.log(email);
            console.log(password);
          }}
        >
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="label-header">
                  Email or Mobiles<span className="text-danger">*</span>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please Enter Here"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="label-header">
                  Password<span className="text-danger">*</span>{" "}
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
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6} className="d-flex">
              <Form.Check type="radio" onClick={toggleRadio} />
              <Form.Check.Label className="custom_margin_left">
                Remember Me{" "}
              </Form.Check.Label>
            </Col>
            <Col md={6} className="text-end">
              <a href="/forgot">Forget Password ?</a>
            </Col>
          </Row>
          {/* <ReCAPTCHA
                  sitekey="6LejDGcdAAAAAP088vmTvYB_sAM7LB8vDZyHfBjS"
                  onChange={onChange}
                /> */}
          <div className="d-flex justify-content-between mt-3">
            <Button variant="primary" className="custom-button">
              Login
            </Button>
            <a href="/register" className="btn btn-primary custom-button">
              Sign Up
            </a>
          </div>
        </Form>
      </div>
    </Background>
  );
}

export default Login;
