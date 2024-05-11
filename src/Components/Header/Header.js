import React, { useState } from "react";
import "./header.css";
import { AppState } from "../Context/Context";

import { NavLink } from "react-router-dom";
import toggleIcon from "././Icons/toggleIcon.png";

export const Header = () => {
    const {currentPage} = AppState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container-lg HeaderMainDiv">
      <div className="headerMainHeading" style={{color:"#195359"}}>JobPortal</div>
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
        <div className={`toggle-mobile ${isOpen ? "dropOpen":""}`} id="navBarDropDown">
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
  );
};
