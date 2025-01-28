import { useState,useMemo} from "react"

var slowFunction=(num)=>{
    for(var slow=0;slow<1000000000;slow++)
    {

    }
    return num*2
}

const UseMemo=()=>
{
    var [num,setNum]=useState(0);
    var [dark,setDark]=useState(false);
    var styling={
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        textAlign: "center"
    }
    var doublingUpANumber=useMemo(()=>{
        return slowFunction(num)
    },[num])
    
    return(
        <div style={styling}>
        
            <h2 style={styling}>This page is ment for useMemo Hook </h2>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>setDark(curTheme=>!curTheme)}>Toggle Them</button>
            <h4 style={styling}>The number is {doublingUpANumber}</h4>
        </div>
    )
}

export default UseMemo;