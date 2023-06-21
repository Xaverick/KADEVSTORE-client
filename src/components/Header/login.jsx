import React, { useContext,useEffect} from "react";
import { Context } from "../../utils/context";
import "./login.scss";
import { useNavigate } from "react-router-dom";


const Login = ({setshowLogin,link}) => {
    const {setUserInfo,userInfo} = useContext(Context);

    useEffect(() => {
        fetch(`${link}/login`, {
            credentials: 'include'
        }).then( response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    }, [])


    const logout = () => {
        fetch(`${link}/logout`,{
            method: 'POST',
            credentials: 'include'
        });
        setUserInfo(null)
    }
    const navigate = useNavigate();

    let username;
    if(userInfo){
        username = userInfo.username;
    }else{
        username = null;
    }


    return (
        <div className="login-panel">
            <div
                className="opac-layer"
                onClick={() => setshowLogin(false)}
            ></div>
            <div className="content">
                {!username && (
                    <>
                        <p onClick={() => {navigate('/login')}}>Login</p>                       
                        <div style={{width:"100%", height:"2px", backgroundColor:"rgb(211, 211, 211)"}}></div>
                        <p onClick={() => {navigate('/register')}}>Register</p>
                    </>
                )} 

                {username && (
                    <>
                        <p>{username}</p>
                        <div style={{width:"100%", height:"2px", backgroundColor:"rgb(211, 211, 211)"}}></div>
                        <p onClick={logout}>Logout</p>
                    </>
                )}    
    
            </div>
        </div>
    );
}            

export default Login;