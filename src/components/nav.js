import React, { Component } from 'react';
//import the Link module
import {Link} from "react-router-dom";

class Nav extends Component {
  render() {
    return (
        <nav>
          <ul>
          <div id="nav-icon">
          <i className="fas fa-bars"></i> 
          </div>
          <li><Link to="/">Active</Link></li>
       
          </ul>
          <ul>
          <li id="close"><i className="fas fa-times"></i></li>
          <li>Active</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
     
          </ul>
        </nav>
    );
  }
}

export default Nav;
