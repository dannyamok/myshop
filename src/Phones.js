import React from 'react'
import "./Phone.css"
import Product from './Product'
import Sidebar from "./Sidebar"


function Phones() {
    return (
    <div className="Phone">
        <Sidebar />
    <div className="shop">
    <div className="shop_row">
    <Product
     id="0001"
     title="Hp Pavilion 15"
     price = {670}
     rating = {4}
     image={require("./img/login.jpg")}
    /> 
     <Product
     id="0002"
     title="Dell Inspiron"
     price = {570}
     rating = {5}
     image={require("./img/login.jpg")}
    /> 
         <Product
     id="0002"
     title="Dell Inspiron"
     price = {570}
     rating = {5}
     image={require("./img/login.jpg")}
    /> 
    </div>
    <div className="shop_row">
    <Product
     id="0003"
     title="Hp Pavilion "
     price = {350}
     rating = {3}
     image={require("./img/login.jpg")}
    /> 
     <Product
     id="0004"
     title="Hp Omen 15"
     price = {2500}
     rating = {5}
     image={require("./img/login.jpg")}
    /> 

<Product
     id="0005"
     title="Lenovo Thinkpad"
     price = {600}
     rating = {3}
     image={require("./img/login.jpg")}
    /> 
    
    </div>
    </div>
        </div>
    )
}

export default Phones
