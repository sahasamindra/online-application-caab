import React from "react";
import Background from "./Background/Background";
import StepWrapper from "./StepProgress/StepWrapper";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import "./forgetPassword.css";
import ResetPasswordForm1 from "./ResetPasswordForm/ResetPasswordForm1";
import ResetPasswordForm2 from "./ResetPasswordForm/ResetPasswordForm2";
import OTPForm from "./OTPForm/OTPForm";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const myCurrentStates = useSelector((state) => state.resetPasswordReducer);
  const navigate = useNavigate();

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
        {activeForm === "form1" ? <ResetPasswordForm1 /> : null}
        {activeForm === "form2" ? <OTPForm for="resetPassword" /> : null}
        {activeForm === "form3" ? <ResetPasswordForm2 /> : null}
        {activeForm === "form4" ? (
          <>
            <p className="text-md fw-bold">
              Your Password Reset Has Been Successful
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

export default ForgetPassword;
