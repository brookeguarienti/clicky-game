import React from 'react';
import "./navbar.css";

function Navbar(props) {
    //The message, score and top Score are being rendered from the App
    return (
        <nav className="navbar sticky-top">
            <p className="navbar-brand">Clicky Game</p>
            {/* allow for message to be placed if we wanted one for each click, win, topscore, etc */}
            {/* <p className="navbar-brand">{props.message}</p> */}
            <p className="navbar-brand score">Your Score is {props.score} | Top Score {props.topScore}</p>
        </nav>

    );
}

export default Navbar;