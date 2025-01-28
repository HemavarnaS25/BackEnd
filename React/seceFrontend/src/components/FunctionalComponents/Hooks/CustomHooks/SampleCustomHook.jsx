import { useEffect,useState } from "react"

const useLocalStorage=(key,value)=>{
    var [text,setText]=useState(()=>{
        const jsonValue = localStorage.getItem(key)
        if(!jsonValue) return jsonValue
        return value
    })
    
    
    useEffect(()=>{
        localStorage.setItem(key, text)
    },[key,text])
    return[text,setText]
}
export default useLocalStorage;