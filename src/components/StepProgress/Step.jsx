import "./step.css";
import React from "react";

function Step(props) {
  const { renderClass } = props;
  const { step } = props;

  return (
    <div className="step-block">
      <div className="circle-wrapper">
        {renderClass === "success" ? (
          <div className="success-step-wrapper">
            <div className="success-step"></div>
          </div>
        ) : (
          <div className={`circle ${renderClass}`}>{step}</div>
        )}
      </div>

      {/* <span class="checkmark">
        <div class="checkmark-circle"></div>
        <div class="checkmark-stem"></div>
        <div class="checkmark-kick"></div>
      </span> */}
    </div>
  );
}

export default Step;
