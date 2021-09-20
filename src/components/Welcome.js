import React ,{useState} from "react";
import PlanetData from "../components/welcome/planets.json";
import Planets from "./welcome/Planets";


const Welcome = () => {
const [planet, setPlanet] = useState(PlanetData);
    return (
      <div className="page" id="welcome-page">
      <p id="welcome-message"> My own little space</p>
      <Planets planet={planet}/>  
      </div>
      
    );
  };
  
export default Welcome;
  