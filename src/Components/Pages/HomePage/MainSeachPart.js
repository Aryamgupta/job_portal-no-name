import React from "react";
import backline from "./Images/Vector 2.svg";
import Amazon from "./Images/Amazon.svg";
import google from "./Images/Google.svg";
import apple from "./Images/Apple Logo.svg";
import youtube from "./Images/YouTube.svg";
import mobileBacklie from "./Images/mobile_line.svg";

export const MainSeachPart = () => {
  return (
    <div className="mainSearchPart">
      <div className="background-desktop">
        <div className="fixDiv amazon">
          <img src={Amazon} />
        </div>
        <div className="fixDiv youtube">
          <img src={youtube} />
        </div>
        <div className="fixDiv google">
          <img src={google} />
        </div>
        <div className="fixDiv apple">
          <img src={apple} />
        </div>
        <img
          src={backline}
          style={{
            position: "absolute",
            width: "100%",
            zIndex: "-1",
            bottom: "0%",
          }}
        />
      </div>
      <div className="background-mobile">
      <div className="fixDiv amazon">
          <img src={Amazon} />
        </div>
        <div className="fixDiv youtube">
          <img src={youtube} />
        </div>
        <div className="fixDiv google">
          <img src={google} />
        </div>
        <div className="fixDiv apple">
          <img src={apple} />
        </div>
      <img
          src={backline}
          style={{
            position: "absolute",
            width: "100%",
            zIndex: "-1",
            bottom: "0%",
          }}
        />
      </div>
      <div className="serachPart">
        <h2>Elevate Your Job Search Experience</h2>
        <div className="inside"></div>
      </div>
    </div>
  );
};
