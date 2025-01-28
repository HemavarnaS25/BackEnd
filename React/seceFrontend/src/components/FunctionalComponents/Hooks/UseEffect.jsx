import { useEffect,useState} from "react";
var UseEffect=()=>{
    var[text,setText]=useState("")
    var[text1,setText1]=useState("")
    useEffect(()=>{
        console.log(text)
        console.log(text1)
    },[text])
    var styling={
        textAlign: "center"
    }
    return(
        <div style={styling}>
            <h1>This is UseEffect Example</h1>
            <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>            
            <h4>The text is {text}</h4>
            <input type="text" value={text1} onChange={(event)=>setText1(event.target.value)}/>
            <h4>The text is {text1}</h4>
        </div>
        
    )
}
export default UseEffect;
