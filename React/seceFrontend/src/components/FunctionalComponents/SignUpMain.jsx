import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
// import'./css/Signup.css';

const Signup = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    const handleSignUp =async (event) =>{
      event.preventDefault();
      try{
        console.log("event triggered");
        const req = await axios.post("http://localhost:3001/signup",{
          firstName:firstName,
          lastName:lastName,
          userName:userName,
          email:email,
          password:password
        })
        //console.log(req)
        alert(req.data.response);
        if(req.data.signupStatus){
          navigate("/");
        }
        else{
          navigate("/.")
        }
      }
        catch(err){
          console.log(err);
        }
    }
  return (
    <div>
        <form method = "POST"  onSubmit={handleSignUp}>
            FirstName : <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} required/><br/>
            LastName : <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required/><br/>
            UserName : <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} required/><br/>
            Email : <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/><br/>
            Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/><br/>
            <button type="submit">Signup</button>
        </form>
        <p>already have account??<a href="/login-main">Login</a></p>
      
    </div>
  )
}

export default Signup