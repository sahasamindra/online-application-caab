import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/images/caabLogo.png";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Background from "./Background/Background";

function Login() {
  const navigate = useNavigate();

  //Login form values
  const [radioToggle, setRadioToggle] = useState(true);
  const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  //Font awesome initialization
  const [eyeClose, setEyeClose] = useState(true);
  const eye = <FontAwesomeIcon icon={faEye} style={{ color: "#0979F9" }} />;
  const eyeSlash = (
    <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#0979F9" }} />
  );

  const toggleRadio = (e) => {
    setRadioToggle(!radioToggle);
    e.target.checked = radioToggle;
    // console.log(radioToggle);
  };

  return (
    <Background>
      <div className="card-layout">
        <img src={Logo} alt="Main Logo" className="logo" />
        <div className="page-title">Welcome</div>
        <div className="page-subtitle mb-3">Please Login To Continue</div>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Implement login logic");
            console.log(email);
            console.log(password);
            console.log(!radioToggle);
          }}
        >
          {/* <Row>
            <Col> */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">
              Email or Mobiles<span className="text-danger">*</span>{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter Here"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">
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
          {/* </Col>
          </Row> */}
          <Row className="mb-3 mt-3">
            <Col md={6} className="d-flex">
              <Form.Check
                type="radio"
                onClick={toggleRadio}
                // value={radioToggle}
              />
              <Form.Check.Label className="ms-1">Remember Me </Form.Check.Label>
            </Col>
            <Col md={6} className="text-end">
              <Link to="/forgetPassword">Forget Password ?</Link>
            </Col>
          </Row>
          {/* <ReCAPTCHA
                  sitekey="6LejDGcdAAAAAP088vmTvYB_sAM7LB8vDZyHfBjS"
                  onChange={onChange}
                /> */}
          {/* <div className="d-flex justify-content-between mt-3"> */}
          <Row>
            <Col>
              <Button
                className="col-12 mt-2 fw-bold"
                variant="primary"
                type="submit"
              >
                Login
              </Button>
            </Col>
            <Col>
              <Button
                className="col-12 mt-2 fw-bold"
                variant="primary"
                type="button"
                onClick={() => navigate("/registration")}
              >
                Sign Up
              </Button>
            </Col>
          </Row>

          {/* </div> */}
        </Form>
      </div>
    </Background>
  );
}

export default Login;
