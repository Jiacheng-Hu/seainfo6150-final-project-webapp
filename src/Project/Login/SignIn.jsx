import React from "react";

    const SignIn = () => {
    return (
        <div className="signin">
            <h2 className="text-center">Please sign in</h2>
            <div className="margin-top">Username</div>
            <input type="text" name="username" id="username" required className="form-control"/>
            <div className="margin-top">Password</div>
            <input type="password" name="password" id="password" required  className="form-control"/><br/>
            <input type="submit" value="submit" className="btn btn-lg btn-primary btn-block margin-top"/>
            <input type="reset" value="reset" className="btn btn-lg btn-default btn-block margin-top"/>
          
        </div>
    );
    
};

export default SignIn;