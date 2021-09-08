import React ,{useState} from "react";
import PlanetData from "../planets.json"
import Planets from "./welcome/Planets"
const Welcome = () => {
const [planet, setPlanet] = useState(PlanetData);
const [preview,setPreview] = useState("");



  const handleClick= (e) =>{
  setPreview(e.target.id)
  }
  
    return (
      <div className="page" id="welcome-page">
        <p id="welcome-message"> My own little space</p>
        <Planets planet={planet} onClick={handleClick}/>
        
      </div>
    );
  };
  
export default Welcome;
  