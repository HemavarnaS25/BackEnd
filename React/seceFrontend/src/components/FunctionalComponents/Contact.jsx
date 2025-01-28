import React from "react";
import {useState} from 'react';
const contact=()=>{
    var [num,setNum]=useState(0)
    function handleAdd(){
        return setNum(num+1)
    }
    var styling={
        textAlign: "center"
    }
    return(
        <div style={styling}>
            <h2>Contact Me</h2>
            <h3>This is a state example</h3>
            <h4>Number is {num}</h4>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}
export default contact;