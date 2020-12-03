import React from "react";

    const Login = () => {
    return (
        <div>
            <div>Username</div>
            <input type="text" name="username" id="username"/>
            <div>Password</div>
            <input type="password"/><br/>
            <input type="submit" value="submit"/>
            <input type="reset" value="reset"/>
        </div>
    );
    
};

export default Login;