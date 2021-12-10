import React from "react";
import Step from "./Step";
import "./stepWrapper.css";

function StepWrapper() {
  const steps = ["1", "2", "3"];
  return (
    <div className="step-wrapper border-cl">
      {steps.map((step, index) => (
        <Step step={step} key={index} />
      ))}
    </div>
  );
}

export default StepWrapper;
