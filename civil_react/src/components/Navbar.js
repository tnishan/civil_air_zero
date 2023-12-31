import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Footing from './footing_comp/Isolated_Footing';

function Navbar() {
  return (
    <nav className='navbar'>
       <Link to="/" className="navbar-brand">
        <h2>CIVIL AIR</h2>
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/isolated_footing">Footing</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      
    </nav>
  );
}

export default Navbar;
