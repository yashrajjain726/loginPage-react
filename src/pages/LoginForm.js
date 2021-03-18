import React from 'react';
class LoginForm extends React.Component {
    render() {
        return (
            <div className="loginForm">
                <h1>Login Page</h1>
                
                <form action="">
                <div className="form-details">
                    <label htmlFor="email"> Email </label>
                    
                    <input type="text" name="email" id="email" placeholder="Enter Your Email"></input>
                </div>
                <div className="form-details">
                    <label htmlFor="password"> Password </label>
                    <input type="text" name="password" id="password" placeholder="Enter Your Password"></input>
                </div>
                <button type="submit" >Login</button>
            </form>     
               
            </div>
        )
    }
}
export default LoginForm;