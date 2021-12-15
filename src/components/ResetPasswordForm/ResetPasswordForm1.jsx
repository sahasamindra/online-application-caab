import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { resetFormFillUp } from "../../redux/actions";
import { Link } from "react-router-dom";

function ResetPasswordForm1() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Request Server for OTP");
          dispatch(
            resetFormFillUp({
              pageTitle: "OTP Verification",
              pageSubTitle: "A 6 Digit Verification Code Has Been Sent",
              activeForm: "form2",
              formData: {
                email,
              },
            })
          );
        }}
      >
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

        <Button className="col-12 mt-2 fw-bold" variant="primary" type="submit">
          Next
        </Button>
        <div className="text-center mt-2">
          <span className="text-md">
            Please <Link to="/">Click Here</Link> To Go Back
          </span>
        </div>
      </Form>
    </>
  );
}

export default ResetPasswordForm1;
