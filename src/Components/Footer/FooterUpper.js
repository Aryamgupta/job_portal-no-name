import React from "react";

import downBtn from "./Images/downBtn2.svg";

const FooterUpper = () => {
  return (
    <div className="footerUpperMainDiv">
      <h2>Browse Jobs by:</h2>
      <div className="jobSelectors row container-xxl">
        <div className="oneJobContainer col-xl-3 col-lg-2.8 col-md-6">
          <button
            className="footerDropDownButton"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Job Collections <img src={downBtn} alt="down" />
          </button>
          <div
            className="dropdown-menu drop-open"
            aria-labelledby="dropdownMenuButton"
          >
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
          </div>
        </div>
        <div className="oneJobContainer col-xl-3 col-lg-2.8 col-md-6">
          <button
            className="footerDropDownButton"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Job by Location <img src={downBtn} alt="down" />
          </button>
          <div
            className="dropdown-menu drop-open"
            aria-labelledby="dropdownMenuButton"
          >
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
          </div>
        </div>
        <div className="oneJobContainer col-xl-3 col-lg-2.8 col-md-6">
          <button
            className="footerDropDownButton"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Jobs by Role
            <img src={downBtn} alt="down" />
          </button>
          <div
            className="dropdown-menu drop-open"
            aria-labelledby="dropdownMenuButton"
          >
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
          </div>
        </div>
        <div className="oneJobContainer col-xl-3 col-lg-2.8 col-md-6">
          <button
            className="footerDropDownButton"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Remote Jobs <img src={downBtn} alt="down" />
          </button>
          <div
            className="dropdown-menu drop-open"
            aria-labelledby="dropdownMenuButton"
          >
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
            <div>
              <a href="#">Jobs for Bootcamp Grads</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUpper;
