import React,{useState, useEffect} from "react";

const Preview = (props) =>{
const [preview, setPreview] = useState("")

useEffect(() => {
  switch (props.show.id) {
    case "me-planet":
    
      break;
    case "philosophy-planet":
    
      break;
    case "sport-planet":
      
      break;
    case "music-planet":
    
      break;
    case "hobby-planet":
      
      break;
    default:
      console.log("default");
  }
});

  
return (<div id="preview-box"> 

</div>)
}

export default Preview