import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
       
          <div>
            <h1>Take That Step</h1>
            <p>Mauris iaculis urna at lorem pellentesque, et posuere leo congue. Nam a faucibus leo. Fusce facilisis lectus sapien, facilisis fringilla mauris commodo eget. Sed posuere eros urna, ac commodo elit ultricies</p>
            <Link className="products" to="/products">Products <i className="fas fa-angle-double-right"></i> </Link>
          </div>
        
      </header>
    );
  }
}

export default Header;
