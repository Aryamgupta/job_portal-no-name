import React from "react";
import blockchain from "./Images/blockchain.svg";
import android  from "./Images/android.svg";
import development from "./Images/development.svg";
import frontend from "./Images/frontend.svg";
import database from "./Images/database.svg";
import backend from "./Images/backend.svg";
import design from "./Images/design.svg";
import sde from "./Images/SDE.svg";

export const PopularJobCategories = () => {
  return (
    <div className="popularJobCategories">
      <h2>Popular Job Categories</h2>
      <div className="container-xl allCategoryContainer">
        <div className=" oneCategory">
          <img src={design} />
          <div>
            <p>Design</p>
            <p>20 new openings</p>
          </div>
        </div>
        <div className=" oneCategory">
        <img src={development} />
          <div>
            <p>Development</p>
            <p>20 new openings</p>
          </div>
        </div>
        <div className=" oneCategory">
          <img src={android} />
          <div>
            <p>Android</p>
            <p>20 new openings</p>
          </div>
        </div>
        <div className=" oneCategory">
          <img src={blockchain} />
          <div>
            <p>Blockchain</p>
            <p>20 new openings</p>
          </div>
        </div>
        <div className=" oneCategory">
          <img src={frontend} />
          <div>
            <p>Frontend</p>
            <p>20 new openings</p>
          </div>
        </div>
        <div className=" oneCategory">
          <img src={backend} />
          <div>
            <p>Backend</p>
            <p>20 new openings</p>
          </div>
        </div>
        <div className=" oneCategory">
          <img src={sde} />
          <div>
            <p>SDE</p>
            <p>20 new openings</p>
          </div>
        </div>
        <div className=" oneCategory">
          <img src={database} />
          <div>
            <p>Database</p>
            <p>20 new openings</p>
          </div>
        </div>

      </div>
    </div>
  );
};
