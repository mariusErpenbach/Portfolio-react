import React ,{useState} from "react";
import PlanetData from "../planets.json";
import Planets from "./welcome/Planets";
import Preview from "./welcome/Preview";

const Welcome = () => {
const [planet, setPlanet] = useState(PlanetData);

  
    return (
      <div className="page" id="welcome-page">
        <p id="welcome-message"> My own little space</p>
        <Planets planet={planet}/>
        <Preview show={"hi"}/>
      </div>
    );
  };
  
export default Welcome;
  