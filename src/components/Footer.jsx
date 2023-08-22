import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="footer">
            <Link className="footer-links" to="/blue">Blue!</Link> 
            <Link className="footer-links" to="/red">Red!</Link>
            <Link className="footer-links" to="/yellow">Yellow!</Link>
            <Link className="footer-links" to="/purple">Purple!</Link>
        </div>
    );
}