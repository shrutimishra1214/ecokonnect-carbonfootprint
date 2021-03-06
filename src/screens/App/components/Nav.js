import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

/** Navigation component that renders different views for logged in/out users */

const Nav = ({ handleLogOut }) => {
  const { curUser } = useContext(UserContext);
  function loggedInLinks() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user-result">
            Saved Results
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login" onClick={handleLogOut}>
            Log Out
          </NavLink>
        </li>
      </ul>
    );
  }
  function loggedOutLinks() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="https://ecokonnect-home.netlify.app/#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        {/*<li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Log In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
    </li>*/}
      </ul>
    );
  }

  return (
    <nav className="navbar-default bg-transparent">
      {curUser ? loggedInLinks() : loggedOutLinks()}
    </nav>
  );
};

export default Nav;
