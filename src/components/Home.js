import React from "react";
import { username, city } from "../data/user.js"
//import JSX syntax
//the two dots = represent going up one level in the path

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export  default Home; 