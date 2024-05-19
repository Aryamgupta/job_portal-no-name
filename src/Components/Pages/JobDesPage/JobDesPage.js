import React from "react";
import "./jobdespage.css";
import forArrow from "./Images/forArrow.svg";
import CollapsableComponent from "./CollapsableComponent";

export const JobDesPage = () => {
  let data = ` <ul>
  <li>Job Role: Internship Trainee</li>
  <li>
    Qualification: BS/MS in Computer Science (or equivalent degree)
  </li>
  <li>Batch: Recent Batches</li>
  <li>Experience: Freshers</li>
  <li>Salary: Upto INR 60K Per Month (Expected)</li>
  <li>Job Location: Bengaluru</li>
  <li>Last Date: ASAP</li>
</ul>`;

  let data2 = `<p>
At Motorola Solutions, we’re guided by a shared purpose – helping people be their best in the moments that matter – and we live up to our purpose every day by solving for safer. Because people can only be their best when they not only feel safe, but are safe. We’re solving for safer by building the best possible technologies across every part of our safety and security ecosystem. That’s mission -critical communications devices and networks, AI-powered video security & access control and the ability to unite voice, video and data in a single command center view. We’re solving for safer by connecting public safety agencies and enterprises, enabling the collaboration that’s critical to connect those in need with those who can help. The work we do here matters.
</p>`;

let data3 = `<p>
All interested and eligible candidates can apply for Swiss Re hiring online by the following link as soon as possible.
</p>`
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
            <img src={forArrow} />
          </button>
        </div>
        <CollapsableComponent heading="Details" data={data} />
        <CollapsableComponent heading="Basic Requirements" data={data} />
        <CollapsableComponent heading="Job Description" data={data} />
        <CollapsableComponent heading="Company Overview" data={data2} />
        <CollapsableComponent heading="How to apply?" data={data3} />
        <div className="companyBottomInfo">
          <p>
          Apply Here: <a href="#">Link</a>
          </p>
          <p>Company Website: <a href="#">xyz.com</a></p>
          <p className="datee">Posted on: May 4, 2024</p>
        </div>
      </div>
    </>
  );
};
