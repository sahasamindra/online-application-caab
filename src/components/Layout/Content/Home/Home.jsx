import React from "react";
import "./home.css";
import Logo from "../../../../assets/images/caabLogo.png";
import Table from "react-bootstrap/Table";

//progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const percentage = 25;

  const sortingIcon = (
    <div className="table-header-icon-container">
      <FontAwesomeIcon icon={faChevronUp} className="table-header-icon" />
      <FontAwesomeIcon icon={faChevronDown} className="table-header-icon" />
    </div>
  );
  return (
    <>
      <div className="profile">
        <div className="user-profile">
          <div className="profile-pic">
            <img src={Logo} alt="Main Logo" />
          </div>
          <div className="profile-description">
            <div className="profile-welcome">Welcome</div>
            <div className="profile-name">K. M. Safwan Hassan Rubab</div>
            <div className="profile-designation">
              Senior Pilot, Bangladesh Biman
            </div>
          </div>
        </div>
        <div className="user-profile-complete">
          <div className="progress-circle">
            <CircularProgressbar
              value={percentage}
              styles={buildStyles({
                pathColor: "#3DC31C",
                trailColor: "#E9F4FF",
              })}
            />
            <div className="percentage">
              {percentage}% <span>Completed</span>
            </div>
          </div>
          <div className="profile-name">Complete Your Profile</div>
          <div className="profile-designation">
            To successfully register your profile as an expert and <br /> to be
            available in the search results.
          </div>
        </div>

        <div className="user-gsat">
          <div className="progress-circle">
            <CircularProgressbar
              value={percentage}
              styles={buildStyles({
                pathColor: "#FF9F31",
                trailColor: "#E9F4FF",
              })}
            />
            <div className="percentage">
              {percentage}
              <div className="days">Days</div>{" "}
              <div className="remaining">Remaining</div>
            </div>
          </div>

          <div className="profile-gsat">
            General Security Assessment Training (GSAT)
          </div>
          <div className="profile-designation">
            Issue Date: 02-05-2021 <br />
            Expire Date: 27-05-2021
          </div>
        </div>
      </div>

      <div className="history">
        <div className="table-subheader">Overview</div>
        <div className="table-header">History</div>
        <Table hover className="overview-table">
          <thead>
            <tr className="table-row-header">
              <th>
                <div className="table-header-title">SN {sortingIcon}</div>
              </th>
              <th>
                <div className="table-header-title">
                  Application Name {sortingIcon}
                </div>
              </th>
              <th>
                <div className="table-header-title">
                  Application Number {sortingIcon}
                </div>
              </th>
              <th>
                <div className="table-header-title">
                  Card Type {sortingIcon}
                </div>
              </th>
              <th>
                <div className="table-header-title">
                  Card Validity {sortingIcon}
                </div>
              </th>
              <th>
                <div className="table-header-title">Status {sortingIcon}</div>
              </th>
              <th>
                <div className="table-header-title">Date {sortingIcon}</div>
              </th>
              <th>
                <div className="table-header-title">Action {sortingIcon}</div>
              </th>
            </tr>
          </thead>
          <tbody className="border">
            <tr>
              <td>1</td>
              <td>Faisal Ahmed</td>
              <td>100065420</td>
              <td>NAP</td>
              <td>08-11-2022</td>
              <td className="draft">Draft</td>
              <td>08-11-2021</td>
              <td>
                <FontAwesomeIcon
                  icon={faArrowCircleRight}
                  className="table-icon"
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Faisal Ahmed</td>
              <td>100065420</td>
              <td>NAP</td>
              <td>08-11-2022</td>
              <td className="pending">Pending</td>
              <td>08-11-2021</td>
              <td>
                <FontAwesomeIcon icon={faPrint} className="table-icon" />
                <FontAwesomeIcon
                  icon={faDownload}
                  className="table-icon table-icon-margin-left"
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Faisal Ahmed</td>
              <td>100065420</td>
              <td>NAP</td>
              <td>08-11-2022</td>
              <td className="accepted">Accepted</td>
              <td>08-11-2021</td>
              <td>
                <FontAwesomeIcon icon={faPrint} className="table-icon" />
                <FontAwesomeIcon
                  icon={faDownload}
                  className="table-icon table-icon-margin-left"
                />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Faisal Ahmed</td>
              <td>100065420</td>
              <td>NAP</td>
              <td>08-11-2022</td>
              <td className="rejected">Rejected</td>
              <td>08-11-2021</td>
              <td>
                <FontAwesomeIcon icon={faPrint} className="table-icon" />
                <FontAwesomeIcon
                  icon={faDownload}
                  className="table-icon table-icon-margin-left"
                />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Faisal Ahmed</td>
              <td>100065420</td>
              <td>NAP</td>
              <td>08-11-2022</td>
              <td className="pending">Pending</td>
              <td>08-11-2021</td>
              <td>
                <FontAwesomeIcon icon={faPrint} className="table-icon" />
                <FontAwesomeIcon
                  icon={faDownload}
                  className="table-icon table-icon-margin-left"
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Home;
