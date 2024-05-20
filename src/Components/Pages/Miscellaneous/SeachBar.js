import React from "react";
import "./Miscellanous.css";
import jobCat from "./Images/jobCat.svg";
import jobLoc from "./Images/jobLoc.svg";
import jobKey from "./Images/jobKey.svg";

const SeachBar = () => {
  return (
    <div className="serachPart">
      <div className="inside">
        <div className="col-lg-5 col-md-12 col-sm-12 jobKeyWord">
          <img src={jobKey} />
          <input placeholder="Job Title, Keywords or Company" />
        </div>
        <div className="col-md-12 col-sm-0 dividerr firstDiverder"></div>

        <div className="col-lg-2 col-md-4 col-sm-12  jobLocation">
          <img src={jobLoc} />
          <input placeholder="Location" />
        </div>
        <div
          className="dividerr"
          style={{ width: "0.5px", height: "80px", background: "#BCBCBC" }}
        ></div>
        <div className="col-lg-3 col-md-4 col-sm-12 jobRole">
          <img src={jobCat} />
          <input placeholder="Job Category" />
        </div>
        <button className="col-lg-1.5 searchBtn">Find Jobs</button>
      </div>
    </div>
  );
};

export default SeachBar;
