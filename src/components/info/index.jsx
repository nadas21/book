import { NavLink } from "react-router-dom";
import "./main.css";

import React, { useState } from "react";

export const Info = () => {
  const [img, setImg] = useState(null);

  const handleImg = (e) => {
    setImg(e.target.files[0]);
    console.log(img);
  };

  return (
    <div className="info">
      <div className="container">
        <div className="info-inner">
          <div className="info-box">
            <div className="info-link">
              <img className="info-link-img" src="" alt="" />
              <h2 className="info-h2">Ulugbek hazinasi</h2>
                <button className="info-btn"
                onChange={(e) => handleImg(e)}>
                    Upload image
                </button>
            </div>
            <div className="info-text">
              <h2 className="info-text-h2">Add author</h2>
              <div className="info-item">
                <NavLink className="info-input">
                  <input
                    className="info-list"
                    type="text"
                    placeholder="First name"
                  />
                </NavLink>
                <NavLink className="info-input">
                  <input
                    className="info-list"
                    type="text"
                    placeholder="Last name"
                  />
                </NavLink>
                <NavLink className="info-input">
                  <input
                    className="info-list"
                    type="text"
                    placeholder="Date of birth"
                  />
                </NavLink>
                <NavLink className="info-input">
                  <input
                    className="info-list"
                    type="text"
                    placeholder="Date of death"
                  />
                </NavLink>
                <NavLink className="info-input">
                  <input
                    className="info-list"
                    type="text"
                    placeholder="Country"
                  />
                </NavLink>
                <NavLink className="info-input">
                  <input className="info-list" type="text" placeholder="Bio" />
                </NavLink>
              </div>
              <button className="info-text-btn">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
