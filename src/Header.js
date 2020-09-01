import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartSharp";
import{useStateValue} from "./StateProvider";
import { auth } from "./Firebase"; 

function Header() {
  const [{basket, user}]= useStateValue();

  const login= () => {
    if(user){
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={require("./img/footer_logo.png")}
          alt=""
        />
      </Link> 

      <div className="header_search">
        <input type="text" className="header_searchinput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user &&"/login"} className="header_link">
          <div onClick={login} className="header_options">
            <span className="option1">Hello {user?.email}</span>
  <span className="option2">{user ? 'Sign Out' : 'Log In'}</span>
          </div> 
        </Link>

        <Link to="/" className="header_link">
          <div className="header_options">
            <span className="option1">My</span>
            <span className="option2">Orders</span>
          </div>
        </Link>

        <Link to="/shop" className="header_link">
          <div className="header_options">
            <span className="option1">The</span>
            <span className="option2">Shop</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="cart">
            <ShoppingCartIcon />
  <span className="option2 cart_count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
