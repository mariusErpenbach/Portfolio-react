import React from "react"

const Planets = (props)=>{

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
   let clickedElement = document.getElementById(e.target.id)
   // first check if other planets are highlighted already 
   let allPlanets = document.getElementsByClassName(e.target.className)
   resetHighlights(allPlanets)

   clickedElement.style.borderColor = "black";
   
    } 

      const items = props.planet.map((item, i) => ( 
        <div className="planets" id={item.id} onClick={handleClick}>
        <div className="planet-line"><i className="fas fa-child"></i></div></div>
      ));
        

      return(
          <div className="my-space">
          {items}
        </div>
           
      )
}

export default Planets