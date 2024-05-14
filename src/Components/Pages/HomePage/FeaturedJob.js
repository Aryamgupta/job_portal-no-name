import React, { useState } from "react";
import forArrow from './Images/bi_arrow-down.svg';
import jobLocation from './Images/location.svg';
import demo from './Images/image 1.png';

export const FeaturedJob = () => {
  const [selectedJobType, setSelectedJobType] = useState("latest");
  return (
    <div className="featuredMainDiv">
      <h2 className="majorHeadingClass">Featured Jobs</h2>
      <div className="container-xl inner">
        <div className="heading">
          <div
            className={selectedJobType == "popular" && "selected"}
            onClick={() => {
              setSelectedJobType("popular");
            }}
          >
            Popular Jobs
          </div>
          <div
            className={selectedJobType == "latest" && "selected"}
            onClick={() => {
              setSelectedJobType("latest");
            }}
          >
            Latest Jobs
          </div>
        </div>
        <div className="content">
            <div className="featuredJobjobContainer">
                <img src={demo}/>
                <div>
                    <div className="profile">Software Engineer II <p><img src={jobLocation}/>location</p></div>
                    <p className="company">Invision</p>
                    <label>Full-Time</label>
                </div>
            </div>
            <div className="featuredJobjobContainer">
                <img src={demo}/>
                <div>
                    <div className="profile">Software Engineer II <p><img src={jobLocation}/>location</p></div>
                    <p className="company">Invision</p>
                    <label>Full-Time</label>
                </div>
            </div>
            <div className="featuredJobjobContainer">
                <img src={demo}/>
                <div>
                    <div className="profile">Software Engineer II <p><img src={jobLocation}/>location</p></div>
                    <p className="company">Invision</p>
                    <label>Full-Time</label>
                </div>
            </div>
            <div className="featuredJobjobContainer">
                <img src={demo}/>
                <div>
                    <div className="profile">Software Engineer II <p><img src={jobLocation}/>location</p></div>
                    <p className="company">Invision</p>
                    <label>Full-Time</label>
                </div>
            </div>
            <div className="featuredJobjobContainer">
                <img src={demo}/>
                <div>
                    <div className="profile">Software Engineer II <p><img src={jobLocation}/>location</p></div>
                    <p className="company">Invision</p>
                    <label>Full-Time</label>
                </div>
            </div>
            <div className="featuredJobjobContainer">
                <img src={demo}/>
                <div>
                    <div className="profile">Software Engineer II <p><img src={jobLocation}/>location</p></div>
                    <p className="company">Invision</p>
                    <label>Full-Time</label>
                </div>
            </div>
            <div className="featuredJobjobContainer">
                <img src={demo}/>
                <div>
                    <div className="profile">Software Engineer II <p><img src={jobLocation}/>location</p></div>
                    <p className="company">Invision</p>
                    <label>Full-Time</label>
                </div>
            </div>
            <div className="featuredJobjobContainer">
                <img src={demo}/>
                <div>
                    <div className="profile">Software Engineer II <p><img src={jobLocation}/>location</p></div>
                    <p className="company">Invision</p>
                    <label>Full-Time</label>
                </div>
            </div>
            
           
        </div>
        <button className="loadMoreBtn">Load More <img src={forArrow}/></button>
      </div>
    </div>
  );
};
