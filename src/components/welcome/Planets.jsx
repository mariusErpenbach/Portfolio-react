import React from "react"

const Planets = ({planet})=>{
console.log(planet)
    const items = planet.map((item, i) => ( 
        <div className="planets" id={planet.id}>
        <div className="planet-line"><i className="fas fa-child"></i></div></div>
      ));
        
      return(
          <div className="my-space">
          {items}
        </div>
           
      )
}

export default Planets