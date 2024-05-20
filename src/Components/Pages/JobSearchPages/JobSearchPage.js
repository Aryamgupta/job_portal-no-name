import React from "react";
import "./jobSearchPage.css";
import SeachBar from "../Miscellaneous/SeachBar";
import JobContainer from "./JobContainer";

export const JobSearchPage = () => {
  return (
    <>
      <div className="jobSearchMainDiv">
        <div className="container-lg searchPart">
          <h2>Search for internships</h2>
          <SeachBar/>
        </div>
        <div className="container-xl jobsConatiner">
          <h2>156 Search results</h2>
          <div className="jobInner">
            <JobContainer/>
            <JobContainer/>
            <JobContainer/>
            <JobContainer/>
            
          </div>
        </div>
      </div>
    </>
  );
};
