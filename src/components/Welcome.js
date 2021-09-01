import React from "react";
const Welcome = () => {

  const showPreview =() =>{
    const element = document.querySelector('#myself-preview')
  
    
    
 
  }
    return (
      <div className="page" id="welcome-page">
        <p id="welcome-message"> My own little space</p>
        <div className="my-space"> 
        <div className="planets" id="me-planet" onClick={showPreview}><div className="planet-line"></div><p>hi</p></div>
        <div className="planets"><div className="planet-line"></div></div>
        <div className="planets"><div className="planet-line"></div></div>
        <div className="planets"><div className="planet-line"></div></div>
        <div className="planets"><div className="planet-line"></div></div>
        </div>
        <div id="myself-preview"></div>
      </div>
      
    );
  };
  
export default Welcome;
  