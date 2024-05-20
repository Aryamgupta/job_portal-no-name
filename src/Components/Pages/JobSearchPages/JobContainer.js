import React from "react";
import { Link } from "react-router-dom";

const JobContainer = () => {
  return (
    <div className="jobConteinerOne">
      <img />
      <div className="desktopInner">
        <div>
          <p className="companyName">Motorola Solutions</p>
          <p className="date">Posted on: May 2, 2024</p>
          <p className="position">Internship Trainee</p>
          <p className="mobileDate">Posted on: May 2, 2024</p>
        </div>
        <div className="desktopDes">
          <p className="companyDes">
            Candidates with BS/MS in Computer Science (or equivalent degree) are
            eligible to apply. The detailed eligibility and application process
            are given below.
          </p>
          <button>
            <Link to="/jobDes">Learn More</Link>
          </button>
        </div>
      </div>
      <div className="mobileDes">
          <p className="companyDes">
            Candidates with BS/MS in Computer Science (or equivalent degree) are
            eligible to apply. The detailed eligibility and application process
            are given below.
          </p>
          <button>
            <Link to="/jobDes">Learn More</Link>
          </button>
        </div>
    </div>
  );
};

export default JobContainer;
