import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { resetFormFillUp } from "../../redux/actions";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function ResetPasswordForm2() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const dispatch = useDispatch();

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
          console.log("Request Server for Setting new password");
          dispatch(
            resetFormFillUp({
              pageTitle: "Success",
              pageSubTitle: "Awesome",
              activeForm: "form4",
              formData: {
                password,
                rePassword,
              },
            })
          );
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicPassword">
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

        <Form.Group className="mb-3" controlId="formBasicRePassword">
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

        <Button className="col-12 mt-2 fw-bold" variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </>
  );
}

export default ResetPasswordForm2;
