import React from "react";

const Welcome = () => {

  const handleClick= (e) =>{
    console.log(e.target.id)
  }
    return (
      <div className="page" id="welcome-page">
        <p id="welcome-message"> My own little space</p>
        <div className="my-space"> 
        <div className="planets" id="me-planet" onClick={handleClick}>
        <div className="planet-line"><div className="planet-line-dot"></div></div></div>
        <div className="planets"><div className="planet-line"><div className="planet-line-dot"></div></div></div>
        <div className="planets"><div className="planet-line"><div className="planet-line-dot"></div></div></div>
        <div className="planets"><div className="planet-line"><div className="planet-line-dot"></div></div></div>
        <div className="planets"><div className="planet-line"><div className="planet-line-dot"></div></div></div>
        </div>
        <div id="myself-preview"></div>
      </div>
    );
  };
  
export default Welcome;
  