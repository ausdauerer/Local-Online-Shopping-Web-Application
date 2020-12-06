import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/data">Show all dataAll data</Link></li>
        <li><Link to="/change">Add data to server database</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;