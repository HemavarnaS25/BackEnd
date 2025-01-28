import { useState } from "react"
import ListItems from "./List"
const UseCallback=()=>{
    var [num,setNum]=useState(0)
    var [dark,setDark]=useState(true)
    var styling={
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black",
        textAlign:"center"
    }
    var getItems=(inc)=>{
        return [num+inc+1,num+inc+2,num+inc+3]
    }
    return(
        <div style={styling}>
            <button onClick={()=>setDark((dark)=>!dark)}>Theme Change</button>
            <h2 style={styling}>Welcome to UseCallback page</h2>
            <input type="number" value={num} onChange={(e)=>{
                setNum(parseInt(e.target.value))
            }}/>
            <ListItems func={getItems(1000)}/> 
        </div>
    )
}
export default UseCallback;