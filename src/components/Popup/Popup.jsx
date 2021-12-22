import React from "react";
import "./popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Popup(props) {
  const { children } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="msg-container" onClick={() => navigate("/dashboard")}>
        <FontAwesomeIcon icon={faCheck} className="icon-check" />
        <div className="font-md">Login</div>
        <div className=" font-md blue">Successful</div>
      </div>
      <div className="popup-container">{children}</div>
    </>
  );
}

export default Popup;
