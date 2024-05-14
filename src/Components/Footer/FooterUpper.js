import React from "react";

import downBtn from './Images/downBtn.svg'

const FooterUpper = () => {
  return (
    <div className="footerUpperMainDiv">
      <h2>Browse Jobs by:</h2>
      <div className="jobSelectors row container-xxl">
      <div className="oneJobContainer col-xl-3 col-lg-2.8 col-md-6">
        <button
              class="footerDropDownButton"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Job Collections <img src={downBtn}/>
            </button>
            <div class="dropdown-menu drop-open" aria-labelledby="dropdownMenuButton">
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              
             
            </div>
        </div>
        <div className="oneJobContainer col-xl-3 col-lg-2.8 col-md-6">
        <button
              class="footerDropDownButton"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Job by Location <img src={downBtn}/>
            </button>
            <div class="dropdown-menu drop-open" aria-labelledby="dropdownMenuButton">
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              
             
            </div>
        </div>
        <div className="oneJobContainer col-xl-3 col-lg-2.8 col-md-6">
        <button
              class="footerDropDownButton"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Jobs by Role<img src={downBtn}/>
            </button>
            <div class="dropdown-menu drop-open" aria-labelledby="dropdownMenuButton">
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              
             
            </div>
        </div>
        <div className="oneJobContainer col-xl-3 col-lg-2.8 col-md-6">
        <button
              class="footerDropDownButton"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Remote Jobs <img src={downBtn}/>
            </button>
            <div class="dropdown-menu drop-open" aria-labelledby="dropdownMenuButton">
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              <div>
                <a href="#">
                    one
                </a>
              </div>
              
             
            </div>
        </div>

      </div>
    </div>
  );
};

export default FooterUpper;
