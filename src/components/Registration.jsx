import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./registration.css";

function Registration() {
  return (
    <div className="card-layout border-cl">
      <h4 className="fw-bold">Sign Up</h4>
      <h6 className="fw-bold">Registration Page</h6>
      <div className="step-container border-cl"></div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">
            Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Please Enter Name Here"
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label className="fw-bold">
            Email address<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control size="sm" type="email" placeholder="Enter Email Here" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label className="fw-bold">
            Mobile Number<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control size="sm" type="tel" placeholder="Enter Mobile Here" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label className="fw-bold">
            Password<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            size="sm"
            type="password"
            placeholder="Enter Password Here"
          />
          <p className="text-sm">
            Use 8 Or More Characters With A Mix Of Letters, Numbers &amp; Symbol
          </p>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label className="fw-bold">
            Re-Password<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            size="sm"
            type="password"
            placeholder="Enter Re-Password Here"
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Creating An Account Means You Agree With Our"
          />
          <a className="a-tag" href="test">
            Terms of Service &amp; Privacy Policy
          </a>
        </Form.Group>
        <Button className="col-12" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Registration;
