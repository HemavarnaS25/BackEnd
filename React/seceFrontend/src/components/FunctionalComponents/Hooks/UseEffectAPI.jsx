import {useState,useEffect} from 'react'
import axios from 'axios'
const UseEffectAPI=()=>{
    var [post,setPost]=useState([])
    useEffect(()=>{
        var response=axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((res)=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
    
    return(
        <div>
            <h1>This page is meant for useEffect API.</h1>
            <h3>The contents inside my JSONPlaceholder API posts</h3>
            <ul>
                {post.map((element)=>(
                    <li key={element.id}>{element.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default UseEffectAPI;