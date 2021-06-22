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
       <SideButtonDown/>
       <SideButtonLeft/>
       <SideButtonRight/>
       <SideButtonUp/>
       </div>
      </div>
    );
  };
  
export default NavBar;
  