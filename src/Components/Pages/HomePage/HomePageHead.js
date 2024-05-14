import React from "react";
import im3 from"./Images/im1.png";
import im1 from "./Images/im2.png";
import im2 from "./Images/im3.svg";
import lineSv from './Images/Vector 2.svg';
import { MainSeachPart } from "./MainSeachPart";

export const HomePageHead = () => {

   

  return (
   
      <div className="homepageHeadMainDiv">
        <MainSeachPart/>
        <img src={im1} className="im1" />
        <img src={im2} className="im2" />
        <img src={im3} className="im3" />        {/* <img src={sideDesign} className="sideDesign" /> */}
      </div>
  );
};
