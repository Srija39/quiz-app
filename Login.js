import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Login.css'
function Login() {
    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return (
        <div className="container">
                <img src="https://i.pinimg.com/736x/e2/1e/2a/e21e2ac9168a0237ee860cb3702fe0d0.jpg"/>
        <div className="login">
            <h1>Login</h1>
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  className="e1"/><br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  className="p1"/><br></br>
                <input type="submit" onClick={submit} className="lbtn"/>
                </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/signup">Signup Page</Link>
        </div></div>
        
    )
}

export default Login