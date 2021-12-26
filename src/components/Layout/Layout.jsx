import React from "react";
import Header from "./Header/Header";
import "./layout.css";
import Logo from "../../assets/images/caabLogo.png";

//progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import SideBar from "./SideBar/SideBar";

function Layout() {
  const percentage = 25;
  return (
    <div className="global">
      <div className="header-bar">
        <Header />
      </div>

      <div className="side-bar">
        <SideBar />
      </div>

      <div className="body-content">
        <div className="dynamic-content">
          <div className="profile">
            <div className="user-profile">
              <div className="profile-pic">
                <img src={Logo} alt="Main Logo" />
              </div>
              <div className="profile-description">
                <div className="profile-welcome">Welcome</div>
                <div className="profile-name">K. M. Safwan Hassan Rubabp</div>
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
                To successfully register your profile as an expert and to be
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

          <div className="history"></div>
        </div>
      </div>

      <div className="footer">
        Copyright @2021 <span>Civil Aviation Authority of Bangladesh</span>
      </div>
    </div>
  );
}

export default Layout;
