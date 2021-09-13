import React,{useState} from "react"

const Planets = (props)=>{

  const handleClick= (e) =>{
    let test12= (e.target.id)
    console.log(test12)
    document.getElementById("preview-box").innerHTML= test12
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