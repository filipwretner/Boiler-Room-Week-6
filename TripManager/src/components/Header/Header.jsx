import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

function Header() {
    return (
      <header className="header-container">
        <h1>Trip Manager</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  // React.memo för att undvika onödiga omrenderingar om props inte ändras
  export default React.memo(Header);