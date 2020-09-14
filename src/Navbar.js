import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./Navbar.css";
import Home from "./Home";
import Phones from "./Phones";


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "40px",
   };
  const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    border: "none",
    
  };
  


function Navbar() {
    return (
        <div style={styles}>

    
      <div>
        <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>
        <Router>
        <hr />
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<Home />} />
        <Route path="/contact" element = {<Home />}/>
        <Route path="/electronics" element = {<Home />} />
        <Route path="/phones" element = {<Phones />} />
        <Route path="/laptops" element = {<Home />} />
        <Route path="/used" element = {<Home />} />
        </Router>
      </div>
    
  </div>
    )
}

export default Navbar
