import React from "react";
import "./Miscellanous.css";
import jobCat from "./Images/jobCat.svg"
import jobLoc from "./Images/jobLoc.svg"
import jobKey from './Images/jobKey.svg';

const SeachBar = () => {
  return (
    <div className="serachPart">
      <h2>Elevate Your Job Search Experience</h2>
      <div className="inside">
        <div className="jobKeyWord">
            <img src={jobKey} />
          <input placeholder="Job Title, Keywords or Company"/>
        </div>
        <div style={{width:"1px",height:"80px",background:"#BCBCBC"}}></div>

        <div className="jobLocation">
        <img src={jobLoc} />
          <input placeholder="Location" />
        </div>
        <div style={{width:"1px",height:"80px",background:"#BCBCBC"}}></div>
        <div className="jobRole">
        <img src={jobCat} />
          <input placeholder="Job Category"/>
        
        </div>
        <button className="searchBtn">Find Jobs</button>
      </div>
    </div>
  );
};

export default SeachBar;
