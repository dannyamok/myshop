import React,{useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {auth} from "./Firebase";

function Login() {
    const history = useHistory();
    const[email, setEmail]= useState('');
    const[password,setPassword]= useState('');


    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('/');
        })
        .catch((e) => alert(e.message));
    };




  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={require("./img/footer_logo.png")} />
      </Link>
      <div className="login_section">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input onChange={event=> setEmail(event.target.value)} value={email} type="text" placeholder="Email" className="signin" required />
          <h5>Password</h5>
          <input
          onChange={event=> setPassword(event.target.value)}
          value={password} 
            type="password"
            placeholder="Password"
            className="signin"
            required
          />
          <Button onClick={login} type="submit" className="login_button">Sign in</Button>
          <p>Need an account? use the button below to sign up</p>
        </form>
        <Link to="/signup">
        <Button className="signup_button">Create an account</Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
