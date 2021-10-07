import React,{useState} from "react"
import Preview from "./Preview"

const Planets = (props)=>{

const [previewShow, setPreviewShow] = useState("blanket")

  const resetHighlights = (planetsToCheck) =>{
    
    for (let i=0;i<planetsToCheck.length;i++){
      if(planetsToCheck[i].style.borderColor==="black"){
       planetsToCheck[i].style.borderColor=""; 
      }
    }
  }

  const handleClick= (e) =>{
    e.preventDefault();
   // change style of clicked planet to hightlight that it was clicked.
   // first check if other planets are highlighted already 
   let allPlanets = document.getElementsByClassName(e.target.className)
   resetHighlights(allPlanets)
   //then change the border-color of the planet we want to highlight 
   let clickedElement = document.getElementById(e.target.id)
   clickedElement.style.borderColor = "black";
   // also pass the highlighted element to the Preview component
    setPreviewShow(clickedElement)
  } 

      const items = props.planet.map((item, i) => ( 
        <div className="planets" id={item.id} onClick={handleClick}>
        <div className="planet-line"><i className="fas fa-child"></i></div></div>
      ));
        
   
      return(
        <React.Fragment>
          <div className="my-space">
          {items}
        </div>
        <Preview show={previewShow}/>
        </React.Fragment>
           
      )
}

export default Planets