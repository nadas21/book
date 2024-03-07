import logo from "../../assets/img/logo.png";
import odam from "../../assets/img/odam.png";
import { NavLink } from "react-router-dom";
import "./main.css";

import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-box">
            <NavLink className="header-img">
              <img src={logo} alt="logo" width={96} height={26} />
            </NavLink>

            <ul className="list-item">
              <li className="list-item-link">
                <NavLink className="list-box-link">Bosh sahifa</NavLink>
              </li>
              <li className="list-item-link">
                <NavLink className="list-box-link">Nasr</NavLink>
              </li>
              <li className="list-item-link">
                <NavLink to={"/naz"} className="list-box-link">
                  Nazm
                </NavLink>
              </li>
              <li className="list-item-link">
                <NavLink className="list-box-link">Maqolalar</NavLink>
              </li>
              <li className="list-item-link">
                <NavLink className="list-box-link">Forum</NavLink>
              </li>
            </ul>

            <NavLink>
              <img src={odam} alt="odam" width={49} height={49} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
