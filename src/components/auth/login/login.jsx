import React from "react"
import {useContext,useState} from "react"
import { useNavigate} from "react-router-dom";
import "./login.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Context} from "../../../utils/context"

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




export default function Login({heading,link}) {


  const {setUserInfo} = useContext(Context)
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect,setRedirect] = useState(false)
  const navigate = useNavigate()
  async function delayedNavigate() {
    console.log("successfully logged in")
    await sleep(1000);        
    navigate('/')
}


const login = async (evt) =>{
    evt.preventDefault();
    const response = await fetch(`${link}/login`, {
        method: 'POST',
        body: JSON.stringify({email,password}),
        headers: {'Content-Type':'application/json'},
        credentials: 'include'
    })
    if(response.ok){
      response.json().then(userInfo => {
        setUserInfo(userInfo)
        setRedirect(true)
      })
     
    }
    else{
      alert('wrong credentials')
    }
    

}

if(redirect){
    delayedNavigate()
}

  return (    
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={login}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">{heading}</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}