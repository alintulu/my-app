import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="Header">
      <NavLink key="home" className="Header-link" exact to="/" activeClassName="active">Home</NavLink>
      <NavLink key="plants" className="Header-link" exact to="/page-two" activeClassName="active">Second Page</NavLink>
      <NavLink key="plants" className="Header-link" exact to="/page-three" activeClassName="active">Third Page</NavLink>
    </nav>
  );
}

export default Header;