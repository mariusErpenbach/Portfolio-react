import React,{useState, useEffect} from "react";
import Characteristics from "./previews/Characteristics.jsx";
import Coding from "./previews/Coding.jsx";
import Philosophy from "./previews/Philosophy.jsx";
import Sport from "./previews/Sport.jsx";
import Music from "./previews/Music.jsx";
const Preview = (props) =>{
const [preview, setPreview] = useState("")

useEffect(() => {
  switch (props.show.id) {
    case "coding-planet":
    setPreview(<Coding/>)
      break;
    case "philosophy-planet":
    setPreview(<Philosophy/>)
      break;
    case "sport-planet":
        setPreview(<Sport/>)
      break;
    case "music-planet":
        setPreview(<Music/>)
      break;
    case "me-planet":
        setPreview(<Characteristics/>)
      break;
    default:
      console.log("default");
  }
},[props.show.id]);

  
return (<div id="preview-box"> 
{preview}
</div>)
}

export default Preview