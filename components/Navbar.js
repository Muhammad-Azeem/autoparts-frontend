import React, { useState } from 'react';
import './Navbar.css'; // Create a CSS file for styling

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
            <button className="hamburger" onClick={toggleNav}>
                &#9776; {/* Hamburger icon */}
            </button>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
