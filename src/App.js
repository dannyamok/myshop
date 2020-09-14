import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Phones from "./Phones";
import Checkout from "./Checkout";
import Login from "./Login";
import SignUp from "./SignUp"
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import Navbar from "./Navbar";





function App() {
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    console.log("user >>", user);

    return ( 
    <Router >
        <div className = "App" >
        <Switch >
        <Route path = "/checkout" >
        <Header />
        <Checkout />
        </Route> 
        <Route path = "/phones" >
        <Header />
        <Phones />
        <Navbar />
        </Route> 
        <Route path = "/login" >
        <Login />
        </Route> 
        <Route path = "/signup" >
        <SignUp />
        </Route> 


        <Route path = "/" >
        <Header />
        <Home />
        <Navbar />
        </Route> 
        </Switch> 
        </div> 
        </Router>
    );
}

export default App;