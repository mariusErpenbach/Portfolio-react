import React   from 'react';
import logo from "../img/urp-logo.png";



const NavBar = () => {


    return (
      <div className="navBar"> 
      <img src={logo} alt="Logo"/>
     
    <nav>
      <div class="social-button" id="linkedInBox"><i class="fab fa-linkedin"></i><aside><p>LinkedIn</p></aside></div>
      <div class="social-button" id="facebookBox"><i class="fab fa-facebook"></i><aside><p>Facebook</p></aside></div>
      <div class="social-button" id="instagramBox"><i class="fab fa-instagram-square"></i><aside><p>Instagram</p></aside></div>
     
    </nav>
      
           
        
      </div>
   
    );
  };
export default NavBar;
  