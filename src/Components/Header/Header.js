import React from "react";
import "./Header.scss";
import Logo from "../../Assets/Logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faBars} className="header__nav-menu-icon" />
      <div className="header__logo-container">
        <img src={Logo} alt="logo" className="header__logo" />
      </div>
    </div>
  );
};

export default Header;
