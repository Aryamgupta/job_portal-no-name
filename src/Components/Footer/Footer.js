import React from "react";
import "./footer.css";
import footerShape from "./Images/fotterSideShape.png";
import bigImage from "./Images/footerBigIcon.png";
import { NavLink } from "react-router-dom";
import { FooterContactLinks } from "./FooterContactLinks";
import FooterUpper from "./FooterUpper";

export const Footer = () => {
  return (
    <>
    <FooterUpper/>
      <div className="footerMainDiv">
        <img src={bigImage} className="bigImgFooter" />
        <div className="footerRemainingPart">
          <div className="footerMainLinks">
            <div>
              <NavLink to="/">Home</NavLink>
              <NavLink to="jobs">Jobs</NavLink>
              <NavLink to="internships">Internships</NavLink>
              <NavLink to="blogs">Blogs</NavLink>
            </div>
            <div>
              <NavLink to="aboutUs">About Us</NavLink>
              <NavLink to="contactUs">Contact Us</NavLink>
              <FooterContactLinks classType="mobileContactDiv" />
            </div>
          </div>
        </div>
        <div className="footerSideDisplay">
          <p>JobPortal</p>
          <img src={footerShape} />
        </div>
        <FooterContactLinks classType="desktopContactDiv" />
      </div>
    </>
  );
};
