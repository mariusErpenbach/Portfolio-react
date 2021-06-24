import React from "react";
import logo from "../img/urp-logo.png";
import SideButtonDown from "./buttons/SideButtonDown";
import SideButtonLeft from "./buttons/SideButtonLeft";
import SideButtonRight from "./buttons/SideButtonRight";
import SideButtonUp from "./buttons/SideButtonUp";
const NavBar = () => {
    return (
      <div id="navBar"> 
       <img src={logo} alt="Logo"/>
       <div id="navigateButtons">
       <SideButtonUp/>
       <SideButtonRight/>
       <SideButtonLeft/>
       <SideButtonDown/>
       </div>
      </div>
    );
  };
  setInterval(NavBar, 1000);
export default NavBar;
  