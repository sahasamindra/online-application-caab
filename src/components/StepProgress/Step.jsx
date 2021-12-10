import "./step.css";
import React from "react";

function Step(props) {
  return (
    <div className="step-block">
      <div className="circle-wrapper">
        <div className="circle">{props.step}</div>
      </div>
    </div>
  );
}

export default Step;
