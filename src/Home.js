import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return ( 
    <div className="home">
        <img src={require("./img/breadcrumb.png")} className="home_banner" alt="" />
    <div className="home_row">
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

    </div>
    <div className="home_row">
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
    )
}

export default Home