import React from 'react'
import "./Sidebar.css"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar_brands">
                <h4>Brands</h4>
            </div>
            <div className="Sidebar_ratings">
                <h4>Ratings</h4>
            </div>
            <div className="Sidebar_price">
                <h4>Price</h4>
            </div>
            <div className="Sidebar_specs">
                <h4>Specification</h4>
            </div>
            <div className="Sidebar_ava">
                <h4>Avalability</h4>
            </div>
        </div>
    )
}

export default Sidebar
