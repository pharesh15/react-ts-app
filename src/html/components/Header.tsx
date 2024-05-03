import React from "react";
import "../../css/components/header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="navs">
          <ul>
            <li>
              <NavLink to={"/"} className="nav">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="nav">
                Add User
              </NavLink>
            </li>
            <li>
              <NavLink to={"/show-users"} className="nav">
                List Users
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="auth">
          <ul>
            <li>Sign Up</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
