import React from "react";
import "./registration.css";

import Button from "react-bootstrap/Button";
import StepWrapper from "./StepProgress/StepWrapper";

import RegistrationForm from "./RegistrationForm/RegistrationForm";
import OTPForm from "./OTPForm/OTPForm";
import { useSelector } from "react-redux";
import Background from "./Background/Background";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const myCurrentStates = useSelector((state) => state.changeFormReducer);
  const { pageTitle } = myCurrentStates;
  const { pageSubTitle } = myCurrentStates;
  const { activeForm } = myCurrentStates;

  return (
    <Background>
      <div className="card-layout">
        <div className="page-title">{pageTitle}</div>
        <div className="page-subtitle">{pageSubTitle}</div>
        <div className="step-container">
          <StepWrapper activeForm={activeForm} />
        </div>

        {activeForm === "form1" ? <RegistrationForm /> : null}
        {activeForm === "form2" ? <OTPForm /> : null}
        {activeForm === "form4" ? (
          <>
            <p className="text-md fw-bold">
              Your Account Has Been Created Successfully
            </p>
            <Button
              className="col-12 fw-bold mt-3"
              variant="primary"
              type="button"
              onClick={() => navigate("/")}
            >
              Login
            </Button>
          </>
        ) : null}
      </div>
    </Background>
  );
}

export default Registration;
