import React,{useState} from "react"

const Planets = ({planet})=>{

const [preview,setPreview] = useState("");
  const handleClick= (e) =>{
    document.getElementById("preview-box")
    setPreview(e.target.id)

    }
    const items = planet.map((item, i) => ( 
        <div className="planets" id={planet.id}  onClick={handleClick}>
        <div className="planet-line"><i className="fas fa-child"></i></div></div>
      ));
        
      return(
          <div className="my-space">
          {items}
        </div>
           
      )
}

export default Planets