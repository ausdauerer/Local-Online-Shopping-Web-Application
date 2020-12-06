import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  return(
    <div id="nvbar">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/data">Search</Link></button>
        <button><Link to="/change">Add item</Link></button>
        <button><Link to="/search">Search</Link></button>
    </div>
  );
};

export default NavBar;