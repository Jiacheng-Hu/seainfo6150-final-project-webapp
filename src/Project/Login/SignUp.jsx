import React from "react";

const SignUp = () => {
    
    return (
        <div className="signup">

            <p>Please fill in this form to sign up, fields with * is required</p>
            <div>*Username</div>
            <input type="text" name="username" id="username" required className="form-control"/>
            <div>*First Name</div>
            <input type="text" required className="form-control"/>
            <div>*Last Name</div>
            <input type="text" required className="form-control"/>
            <div>*ID Number</div>
            <input type="text" required className="form-control"/>
            <div>*Email</div>
            <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must follow the valid email format" required className="form-control"/>
            <div>Degree</div>
            
            <input type="radio" name="degree" />Bachelor
            <input type="radio" name="degree"/>Master
            <input type="radio" name="degree"/>Doctor
            <div>Major</div>
            <select  className="form-control">
                <option value="is">Information Systems</option>
                <option value="cs">Computer Science</option>
                <option value="data">Data Analytics Engineering</option>
                <option value="ba">Business Analytics</option>    
            </select>
            <div>Password</div>
            <input type="password" name="password" id="password" required className="form-control"/>
            <div>Re-enter Password</div>
            <input type="password" name="password" id="password" required className="form-control"/><br/>

            <input type="submit" value="Submit" className="btn btn-lg btn-primary btn-block margin-top"/>
            <input type="reset" value="Reset" className="btn btn-lg btn-default btn-block margin-top"/>        
        </div>
    );
};

export default SignUp;