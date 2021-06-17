import React from "react";
import logo from "../img/urp-logo.png";


const NavBar = () => {
    return (
      <div id="navBar">
        <img src={logo} alt="Logo"/>
        <div class="navButton"></div>
        <div class="navButton"></div>
        <div class="navButton"></div>
        <div class="navButton"></div>
        <div class="siteMap"></div>
      </div>
    );
  };
  
export default NavBar;
  