import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div id="nav-sidebar" className="nav-content animated bounceInLeft">
        <Link to="/">
          <div>Home</div>
        </Link>

        <Link to="/About-US">
          <div>About US</div>
        </Link>

        <Link to="/Services">
          <div>Services</div>
        </Link>

        <Link to="/Promotion">
          <div>Promotion</div>
        </Link>
      </div>
    );
  }
}

export default Navbar;
