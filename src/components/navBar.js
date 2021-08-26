import React  from 'react';
import logo from "../img/urp-logo.png";

// import SideButton from "./buttons/SideButton";
// import SideButtonLeft from "./buttons/SideButtonLeft";
// import SideButtonRight from "./buttons/SideButtonRight";
// import SideButtonUp from "./buttons/SideButtonUp";
const NavBar = () => {
  // const [pageCount, setCount] = useState(0)

  // function pageCounterDecrease(){
  //   setCount(pageCount-1)
  // }
  // function pageCounterRaise(){
  //   setCount(pageCount+1)
  // }
  
  // const pageCounter = {pageCount};
  // NavBar.props += {pageCounter};
 
    return (
    
      <div id="navBar"> 
       <img src={logo} alt="Logo"/>
      <button><a href="/">welcome</a></button>
      <button><a href="/blog">blog</a></button>
      <button><a href="/aboutme">aboutme</a></button>


      </div>
   
    );
  };
export default NavBar;
  