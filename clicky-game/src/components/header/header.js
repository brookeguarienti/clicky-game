import React from 'react';
import "./header.css";

function Header() {
    return(
        <div className="header">
            <h2>
                Gardening Click-Game
            <br />
            Be sure to click on a plant only ONCE! 
            <br />
            If you click on a plant more than once, you lose!
            </h2>

        </div>
    );
}

export default Header;