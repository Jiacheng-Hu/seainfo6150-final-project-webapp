import React, {useState} from "react";
import Login from "./Login";
import Signin from "./Signin";

const LoginApp = () => {
    const [display, setDisplay] = useState("login");
    function onSubmit(e){
        e.preventDefault();
        let content = document.getElementById("username").value;
        alert(`Welcome ${content}`);
        window.location.href="/homepage";
    }
    
    return (
        <div> 
            <form onSubmit={onSubmit}>
                {display === "login" ? <Login/> : <Signin/>}
            </form>
            <button onClick={() => setDisplay("login")}>Sign-In</button>
            <button onClick={() => setDisplay("signin")}>Register</button>   
        </div>
        
    );
};

export default LoginApp;