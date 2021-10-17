import React, { useState } from "react";

function App3(){

    const[products,setProducts]=useState([
                                            {"p_id":111,"p_name":"lux","p_cost":1000},
                                            {"p_id":222,"p_name":"Rexona","p_cost":2000},
                                            {"p_id":333,"p_name":"Santhoor","p_cost":3000},
                                            {"p_id":444,"p_name":"pears","p_cost":4000},
                                            {"p_id":555,"p_name":"LifeBoy","p_cost":5000},
                                            {"p_id":666,"p_name":"Hemam","p_cost":6000}
    ])
    const add_product=()=>{
       // console.log("hello");
        setProducts([...products,{"p_id":777,"p_name":"VEDHA SHAKTHI ","p_cost":7000}])
    }
    return(
        <React.Fragment>
            <table border="1" cellPadding="10px" cellSpacing="10px" align="center" >
                <thead>
                    <tr>
                        <th>p_id</th>
                        <th>p_name</th>
                        <th>p_cost</th> 
                    </tr>
                </thead>
                <tbody>
                    {products.map((element,index)=>(
                        <tr key={index}>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={{marginLeft:720,marginTop:50}} onClick={add_product}>add record</button>
        </React.Fragment>
    )
}
export default App3;