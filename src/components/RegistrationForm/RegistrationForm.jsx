import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CountryCode } from "../CountryCode/CountryCode";

import { useDispatch } from "react-redux";
import { formFillUp } from "../../redux/actions";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function RegistrationForm() {
  const dispatch = useDispatch();

  //Form-1 Values
  const [selectedFlag, setSelectedFlag] = useState("bd");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+880");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [termAgreement, setTermAgreement] = useState(false);

  const handleSelection = (data) => {
    // console.log(`${data.substring(3).toLowerCase()}.svg`);
    setSelectedFlag(data.substring(0, 2).toLowerCase());
    setSelectedCountryCode(data.substring(3).toLowerCase());
  };

  //Font awesome initialization
  const [eyeClose, setEyeClose] = useState(true);
  const [eyeReClose, setEyeReClose] = useState(true);

  const eye = <FontAwesomeIcon icon={faEye} style={{ color: "#0979F9" }} />;
  const eyeSlash = (
    <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#0979F9" }} />
  );

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            formFillUp({
              pageTitle: "OTP Verification",
              pageSubTitle: "A 6 Digit Verification Code Has Been Sent",
              activeForm: "form2",
              formData: {
                selectedFlag,
                selectedCountryCode,
                name,
                email,
                mobile,
                password,
                rePassword,
                termAgreement,
              },
            })
          );
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

        <Button className="col-12 mt-2 fw-bold" variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </>
  );
}

export default RegistrationForm;
