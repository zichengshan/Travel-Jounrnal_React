import React from "react";
import logo from "../logo.png"

export default function Navbar() {
    return (
        <div className="nav">
            <img className="nav--img" src={logo} alt="logo"/>
            <h3 className="nav--title">my travel journal.</h3>
        </div>
    )
}