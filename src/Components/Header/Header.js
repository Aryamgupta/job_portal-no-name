import React, { useState } from "react";
import "./header.css";
import { AppState } from "../Context/Context";

import { NavLink } from "react-router-dom";
import toggleIcon from "././Icons/toggleIcon.png";
import sideBlog from "./Icons/Side blobs.png";

export const Header = () => {
  const { currentPage,headerTheme } = AppState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {headerTheme == "home" && <img
        src={sideBlog}
        style={{ position: "absolute", width: "40%", minWidth: "200px" ,maxWidth:"400px"}}
      />}
      <div className="container-lg HeaderMainDiv">
        <div className="headerMainHeading" style={{ color: `${headerTheme == "home"?"white":"#195359"}` }}>
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
  );
};
