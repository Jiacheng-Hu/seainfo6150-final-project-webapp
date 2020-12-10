import React, {useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {useHistory} from "react-router-dom";

const Login = () => {
    let history = useHistory();
    const [display, setDisplay] = useState("Sign in");
    function onSubmit(e){
        e.preventDefault();
        let content = document.getElementById("username").value;
        alert(`Welcome ${content}`);
        let username=e.target.elements.username.value;
        history.push(
            "/",
            {
                username: username,
                login: true
            }
        )
    }
    
    return (
        <div> 
            <form onSubmit={onSubmit}>
                {display === "Sign in" ? <SignIn/> : <SignUp/>}
            </form>
            <button onClick={() => setDisplay("Sign in")} class="signBtn">Sign in</button>
            <button onClick={() => setDisplay("sign up")} class="signBtn">Sign up</button>   
        </div>
        
    );
};

export default Login;