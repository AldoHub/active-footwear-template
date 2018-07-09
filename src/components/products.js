import React, { Component } from 'react';
import shoe from "../assets/images/imani-clovis-234736-unsplash.jpg";

import {Link} from "react-router-dom";


class Products extends Component {
  render() {
    return (
      <React.Fragment>
           <div className="productsImg"></div>
        <section>
         
          <h2>Products.</h2>
          <div className="shoesContainer">
            <div className="shoe">
            <span>200</span> 
            <Link to="/product/0">
              <img src={shoe} />
            </Link>  
            <p>Shoe Short Description</p>
            </div>
            
            <div className="shoe">
            <span>200</span> 
            <Link to="/product/1">
              <img src={shoe} />
              </Link>  
              <p>Shoe Short Description</p>
            </div>
            <div className="shoe">
            <span>200</span> 
            <Link to="/product/2">
              <img src={shoe} />
              </Link>  
              <p>Shoe Short Description</p>
            </div>
            <div className="shoe">
            <span>200</span> 
            <Link to="/product/3">
              <img src={shoe} />
              </Link>  
              <p>Shoe Short Description</p>
            </div>
            <div className="shoe">
            <span>200</span>
            <Link to="/product/4"> 
              <img src={shoe} />
              </Link>  
              <p>Shoe Short Description</p>
            </div>
            <div className="shoe">
            <span>200</span> 
            <Link to="/product/5">
              <img src={shoe} />  
            </Link>  
              <p>Shoe Short Description</p>
            </div>
          </div>

        </section>
        </React.Fragment>
    );
  }
}

export default Products;
