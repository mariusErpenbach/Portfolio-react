import React, {useState}  from 'react';
import logo from "../img/urp-logo.png";
import SideButtonDown from "./buttons/SideButtonDown";
import SideButtonLeft from "./buttons/SideButtonLeft";
import SideButtonRight from "./buttons/SideButtonRight";
import SideButtonUp from "./buttons/SideButtonUp";
const NavBar = () => {
  const [pageCount, setCount] = useState(5)

  function pageCounterDecrease(){
    setCount(pageCount+1)
  }
    return (
      <div id="navBar"> 
       <img src={logo} alt="Logo"/>
       <div id="navigateButtons" onClick={pageCounterDecrease}>
       <SideButtonUp/>
       <SideButtonRight/>
       <SideButtonLeft/>
       <SideButtonDown/>
       <div>{pageCount}</div>
       </div>
      </div>
    );
  };
export default NavBar;
  