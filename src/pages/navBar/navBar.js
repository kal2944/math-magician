import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav-bar">
      <a className="nav-logo" href="/">
        Math Magician
      </a>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quotes</Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
