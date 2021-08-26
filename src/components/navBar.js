import React   from 'react';
import logo from "../img/urp-logo.png";
import { Link } from 'react-router-dom';
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
      <div className="navBar"> 
      <img src={logo} alt="Logo"/>
      <button><Link to="/">welcome</Link></button>
      <button><Link to="/blog">blog</Link></button>
      <button><Link to="/aboutme">aboutme</Link></button>
    
      </div>
   
    );
  };
export default NavBar;
  