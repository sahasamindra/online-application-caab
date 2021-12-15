import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { formFillUp } from "../../redux/actions";

function OTPForm() {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(90);

  //Form-1 Values
  const [OTP, setOTP] = useState("");

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Implement OTP verification logics");
          dispatch(
            formFillUp({
              pageTitle: "Success",
              pageSubTitle: "Awesome",
              activeForm: "form4",
              formData: {
                OTP,
              },
            })
          );
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
        <Button className="col-12 mt-3 fw-bold" variant="primary" type="submit">
          Next
        </Button>
        <div className="d-flex justify-content-center mt-2 fw-bold">
          <p className="text-md">I Didn't Get Any Code.</p>&nbsp;
          <p
            type="button"
            className="text-md text-md-underline"
            onClick={() => console.log("Resend verification Code Logic")}
          >
            RESEND CODE ({counter})
          </p>
        </div>
      </Form>
    </>
  );
}

export default OTPForm;
