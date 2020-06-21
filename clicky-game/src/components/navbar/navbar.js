import React from 'react';
import "./style.css";

function Navbar(props) {
    //The message, score and top Score are being rendered from the App
    return (
        <nav className="navbar sticky-top">
            <h3 className="navbar-brand">Clicky Game</h3>
            <h3 className="navbar-brand">{props.message}</h3>
            <h3 className="navbar-brand">Your Score is {props.score} | Top Score {props.topScore}</h3>
        </nav>

    );
}

export default Navbar;