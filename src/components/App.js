import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

//-use default export and import-> files: username and city variables in src/component/Home.js file (about, home, navbar) into app
// -Import the image variable in the src/components/About.js file 
// use relative path

