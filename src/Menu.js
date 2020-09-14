import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css"

export default ({ close }) => (
  <div className="menu">
    <ul className = "menu_items">
      <li>
        <NavLink onClick={close} activeClassName="current" className="current" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" className="current" to="about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" className="current" to="contact">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" className="current" to="electronics">
        Electronics
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" className="current" to="phones">
        Phones & Tablets
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" className="current" to="laptops">
        Laptops
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" className="current" to="used">
        Used Products
        </NavLink>
      </li>
    </ul>
  </div>
);
