import React from "react";
import "./jobdespage.css";
import forArrow from  './Images/forArrow.svg';

export const JobDesPage = () => {
  return (
    <>
      <div className="container-lg jobDesMainDiv">
        <div className="companyTopInfo">
          <div>
            <h2>Motorola Solutions</h2>
            <h4>Internship Trainee</h4>
          </div>
          <img />
        </div>
        <div className="companytags">
          <label className="experience">0 - 1 yr experience</label>
          <label className="location">Bangalore</label>
          <label className="contract">Contract</label>
          <label className="pay">₹10L - ₹15L /yr</label>
        </div>
        <div className="companydescription">
          <div className="companyLink">
            <label>Company Website: </label>
            <a href="#">xyz.com</a>
          </div>
          <p className="companyDes">
            Motorola Solutions Hiring Internship Trainee 2024: Candidates with
            BS/MS in Computer Science (or equivalent degree) are eligible to
            apply. The detailed eligibility and application process are given
            below.
          </p>
          <button className="jobApplyBtn">
            Apply Here
            <img src={forArrow}/>
          </button>
        </div>
      </div>
    </>
  );
};
