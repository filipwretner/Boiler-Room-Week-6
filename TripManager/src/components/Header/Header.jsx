import { Link } from 'react-router-dom';
import React from 'react';

const Header = React.memo(() => {
    return (
        <header>
            <h1>Trip Manager</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                    <li>
                        <Link to="/details">Details</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
});

export default Header;