import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div id="navbar">
            <Link className="links" to="/blue">Blue!</Link> 
            <Link className="links" to="/red">Red!</Link>
            <Link className="links center-link" to="/home">-- Home --</Link>
            <Link className="links" to="/yellow">Yellow!</Link>
            <Link className="links" to="/purple">Purple!</Link>
        </div>
    );
}