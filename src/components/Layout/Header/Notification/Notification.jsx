import React from "react";
import "./notification.css";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function Notification() {
  return (
    <>
      <div className="container">
        {/* <div className="icon-container"> */}
        <div className="icon-bg-green">
          <FontAwesomeIcon icon={faFileAlt} className="icon-file" />
          {/* </div> */}
        </div>
        <div className="body-container">
          <div className="header">Application Accepted</div>
          <div className="body">
            contrary to popular belief is not simply random text
          </div>
        </div>
        <div className="time-container">1 Day</div>
      </div>

      <div className="container">
        {/* <div className="icon-container"> */}
        <div className="icon-bg-red">
          <FontAwesomeIcon icon={faFileAlt} className="icon-file" />
          {/* </div> */}
        </div>
        <div className="body-container">
          <div className="header">Application Rejected</div>
          <div className="body">
            contrary to popular belief is not simply random text
          </div>
        </div>
        <div className="time-container">1 Day</div>
      </div>

      <div className="container">
        {/* <div className="icon-container"> */}
        <div className="icon-bg-yellow">
          <FontAwesomeIcon icon={faFileAlt} className="icon-file" />
          {/* </div> */}
        </div>
        <div className="body-container">
          <div className="header">Application Pending</div>
          <div className="body">
            contrary to popular belief is not simply random text
          </div>
        </div>
        <div className="time-container">1 Day</div>
      </div>

      <div className="container">
        {/* <div className="icon-container"> */}
        <div className="icon-bg-gray">
          <FontAwesomeIcon icon={faFileAlt} className="icon-file" />
          {/* </div> */}
        </div>
        <div className="body-container">
          <div className="header">Application Drafted</div>
          <div className="body">
            contrary to popular belief is not simply random text
          </div>
        </div>
        <div className="time-container">1 Day</div>
      </div>

      <div className="all-notifications">View All</div>
    </>
  );
}

export default Notification;
