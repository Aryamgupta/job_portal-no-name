import React, { useState } from "react";
import im3 from "./Images/im1.png";
import im1 from "./Images/im2.png";
import im2 from "./Images/im3.svg";
import lineSv from "./Images/Vector 2.svg";
import { MainSeachPart } from "./MainSeachPart";

import toggleIcon from "././Images/toggleIcon.png";
import sideBlog from "./Images/Side blobs.png";
import { AppState } from "../../Context/Context";
import { NavLink } from "react-router-dom";
import SeachBar from "../Miscellaneous/SeachBar";

export const HomePageHead = () => {
  const { currentPage, headerTheme } = AppState();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="homepageHeadMainDiv">
      <div style={{ position: "relative" }}>
        <img
          src={sideBlog}
          style={{
            position: "absolute",
            width: "40%",
            minWidth: "200px",
            maxWidth: "400px",
            zIndex: "2",
          }}
        />
        <div className="container-lg HeaderMainDiv" style={{ position:"relative", zIndex: "3" }}>
          <div className="headerMainHeading" style={{ color: "white" }}>
            JobPortal
          </div>
          <div className="activeLinkDisplay">{currentPage}</div>
          <div className="otherNavBarItem">
            <button
              className="toggle-btn"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <img src={toggleIcon} />
            </button>
            <div
              className={`toggle-mobile ${isOpen ? "dropOpen" : ""}`}
              id="navBarDropDown"
            >
              <div>
                <NavLink to="/">Home</NavLink>
              </div>
              <div>
                <NavLink to="jobs">Jobs</NavLink>
              </div>
              <div>
                <NavLink to="internships">Internships</NavLink>
              </div>
              <div>
                <NavLink to="blogs">Blogs</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MainSeachPart /> */}
      <div className="homepageSearch">
        <h2>Elevate Your Job Search Experience</h2>
      <SeachBar/>
      </div>
      <img src={im1} className="im1" />
      <img src={im2} className="im2" />
      <img src={im3} className="im3" />
    </div>
  );
};
