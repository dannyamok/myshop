import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import Button from "@material-ui/core/Button";
import { auth } from "./Firebase";

function SignUp() {
    const history = useHistory();
    const[email, setEmail]= useState('');
    const[password,setPassword]= useState('');

    const register = (event) =>{
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
          history.push('/');
        })
        .catch((e) => alert(e.message));
    };

  return (
    <div className="signUp">
      <Link to="/">
        <img className="signUp_logo" src={require("./img/footer_logo.png")} />
      </Link>
      <div className="signUp_section">
        <h1>Sign Up</h1>
        <form>
          <h5>Email</h5>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="text"
            placeholder="Email"
            className="signup"
            required
          />
          <h5>Password</h5>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="signup"
            required
          />
        </form>
        <Button onClick={register} className="signUp_button">
         Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
