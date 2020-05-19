import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="Header">
      <NavLink key="home" className="Header-link left" exact to="/" activeClassName="active">Home</NavLink>
      <NavLink key="second-page" className="Header-link right" exact to="/page-two" activeClassName="active">Request an image</NavLink>
      <NavLink key="third-page" className="Header-link left" exact to="/page-three" activeClassName="active">Available images</NavLink>
    </nav>
  );
}

export default Header;