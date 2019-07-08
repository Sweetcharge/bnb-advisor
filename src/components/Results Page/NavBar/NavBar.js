import React from 'react'

import placeholder from "../../placeholder.png"

import { FaHome, FaHeart, FaRoad } from 'react-icons/fa';

import { NavLink } from "react-router-dom";
import "./nav.css"

function NavBar(){
    return (
        <div className="NavBar">
            <img className="Nav-img" src={placeholder} alt=""/>
            <ul>
                <li>
                    <NavLink 
                        className="Nav-link" 
                        exact to={"/"}>
                        <FaHome className="FaHome"/> 
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className="Nav-link" 
                        exact to={"/favorites"}>
                        <FaHeart className="FaHeart" /> 
                        Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className="Nav-link" 
                        exact to={"/map"}>
                        <FaRoad className="FaRoad"/> 
                        Map
                    </NavLink>
                </li>
            </ul>
            <div className="Nav-info">
                <p className="Nav-main">BNB Advisor</p>
                <p className="Nav-subtext">This project was created by
                <strong> Samuel John Belarmino</strong>. BNB-Advisor is a combination or AirBNB and
                Trip Advisor. A user is able to search up all of the
                activites, food places, malls, etc. they can partake in
                based off of a given location. Give it a try! </p>
            </div>
        </div>
    )   
}

export default NavBar
