import React from "react";

const Signin = () => {
    
    return (
        <div>
            <div>Username</div>
            <input type="text" name="username" id="username"/>
            <div>First Name</div>
            <input type="text"/>
            <div>Last Name</div>
            <input type="text"/>
            <div>ID Number</div>
            <input type="text"/>
            <div>Email</div>
            <input type="text"/>
            <div>Degree</div>
            <input type="radio" name="degree"/>Bachelor
            <input type="radio" name="degree"/>Master
            <input type="radio" name="degree"/>Doctor
            <div>Major</div>
            <select>
                <option value="is">Information Systems</option>
                <option value="cs">Computer Science</option>
                <option value="data">Data Analytics Engineering</option>
                <option value="ba">Business Analytics</option>    
            </select>
            <div>Password</div>
            <input type="password"/>
            <div>Re-enter Password</div>
            <input type="password"/><br/>
            <input type="submit" value="Submit"/><br/>
            <input type="reset" value="Reset"/>        
        </div>
    );
};

export default Signin;