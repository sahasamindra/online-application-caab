import React from "react";
import Step from "./Step";
import "./stepWrapper.css";

function StepWrapper(props) {
  const { activeForm } = props; //form1=> success
  const steps = ["1", "2", "3"];

  return (
    <div className="step-wrapper">
      {steps.map((step, index) => (
        <Step
          step={step}
          key={index}
          renderClass={
            activeForm.substring(4) === step
              ? "active-step"
              : activeForm.substring(4) > step
              ? "success"
              : null
          }
        />
      ))}

      {/* <Step step="1" renderClass="active-step" />
      <Step step="2" renderClass="" />
      <Step step="3" renderClass="" /> */}
    </div>
  );
}

export default StepWrapper;
