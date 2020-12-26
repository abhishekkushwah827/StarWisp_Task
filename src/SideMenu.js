import React from 'react';
import "./SideMenu.css";
import { Link } from "react-router-dom";
import Dashboard from "./Images/Dashboard.png";
import Shape2 from "./Images/Shape2.png";
import Shape3 from "./Images/Shape3.png";


function SideMenu() {
    return (
        <div className="menu">
            <Link to="/">
                <div className="menu__div1">
                    <img src={Dashboard} alt="Dashboard img" />
                    <span>Dashboard</span>
                </div>
            </Link>
            <Link to="Lorem">
                <div className="menu__div2">
                    <img src={Shape2} alt="Dashboard img" />
                    <span>Lorem</span>
                </div>
            </Link>
            <Link to="ipsum">
                <div className="menu__div3">
                    <img src={Shape3} alt="Dashboard img" />
                    <span>ipsum</span>
                </div>
            </Link>
        </div>
    )
}

export default SideMenu;
