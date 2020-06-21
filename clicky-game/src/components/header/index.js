import React from 'react';
import "./header.css";

function Header() {
    return(
        <div className="header">
            <h2>
            Food From Around The World Click-Game
            <br />
            Be sure to click on a plate of food only ONCE! 
            <br />
            If you click on a plate more than once, you lose!
            </h2>

        </div>
    );
}

export default Header;