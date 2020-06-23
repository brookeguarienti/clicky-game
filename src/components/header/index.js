import React from 'react';
import "./header.css";

// function header 
function Header() {
    return(
        <div className="header row">
            <h2>
            Food From Around The World Click-Game
            </h2>
            <p>
            Be sure to click on a plate of food only ONCE! 
            </p>
            <p>
            If you click on a plate more than once, you lose!
            </p>

        </div>
    );
}

export default Header;