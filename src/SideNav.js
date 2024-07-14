import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css'; // Import your CSS file for styling

const SideNav = () => {
    return (
        <nav className="sidenav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/fetch">Stock Picker Fetch</Link>
                </li>
                <li>
                    <Link to="/scalper">Stock Scalper</Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;
