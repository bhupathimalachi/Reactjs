import React, { useState } from "react";

function App1(){
    const [num,setNum]=useState(0);

    const funone=( data )=>{
    //    document.write(data);
    setNum(num+data);

    };

    return(
        <React.Fragment>
            <h1>Num:{num}</h1>
            <button onClick={()=>funone(2)}> CLICK HERE  </button>
        </React.Fragment>
    )
}
export default App1;