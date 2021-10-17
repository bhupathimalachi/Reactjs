import React, { useState } from "react";


function App(){
  const[sub,setSub]=useState("REACTJS");
  const funone= ()=>{
    setSub("WELCOME TO REACTJS ")
  }
    return(
      <React.Fragment>
        <h1>{sub}</h1>
        <button onClick={funone}>change</button>
      </React.Fragment>
    )

}

export default App;
