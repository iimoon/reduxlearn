import React from "react";
import { Link } from "react-router-dom";
import boy from "../../images/boy.png";

import "./Header.scss"
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">MovieApp</div>
      </Link>

      <div className="user-image">
        <img src={boy} alt="user" />
      </div>
    </div>
  );
};

export default Header;
