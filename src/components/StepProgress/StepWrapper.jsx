import React from "react";
import Step from "./Step";
import "./stepWrapper.css";

function StepWrapper() {
  const steps = ["1", "2", "3"];
  return (
    <div className="step-wrapper">
      {/* {steps.map((step, index) => (
        <Step step={step} key={index} active={""} />
      ))} */}

      <Step step="1" renderClass="success" />
      <Step step="2" renderClass="active-step" />
      <Step step="3" />
    </div>
  );
}

export default StepWrapper;
