import React from "react"
import Welcome from "./components/Welcome"
import Blog from "./components/Blog"
import Aboutme from "./components/Aboutme"
import Projects from "./components/Projects"
import NavBar from "./components/NavBar"
import ProjectsIntro from "./components/Projects-intro"
import Social from "./components/Social"

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Welcome/>
      <Aboutme/>
      <Blog/>
      <Social/>
      <Projects/>
      <ProjectsIntro/>
      <Blog/>
    </React.Fragment>
  );
}

export default App;
