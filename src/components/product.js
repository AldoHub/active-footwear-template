import React, { Component } from 'react';
import emuImg from "../assets/images/imani-clovis-234736-unsplash.jpg";
import {Link} from "react-router-dom";

class Product extends Component {
  render() {
    return (
      <React.Fragment>
     
        <section className="description">
       
        <div className="productImg"></div>
           <div>
                <h2>Product Page {this.props.match.params.id} </h2>
            
               <div className="product">
                    <img src={emuImg} />
                    <div>
                    <Link className="back" to="/products"><i className="fas fa-angle-double-left"></i> Go Back</Link>
                        <h3>Price</h3>
                        <p className="price"> &#36;200</p>
                        <h3>Description</h3>
                        <p>Aliquam congue nunc velit. Phasellus eu nisl eros. Donec felis ante, sollicitudin id lorem quis, cursus dictum odio. Nulla sit amet justo neque. In id elit in sem vestibulum viverra eu sodales magna.</p> 
                        <p>Proin aliquam aliquam faucibus. Fusce eu tortor turpis. Integer luctus, ligula sed volutpat interdum, massa tortor dapibus nisl, non porta purus sapien sed est. Mauris porta eros vitae dolor luctus facilisis. Proin gravida vehicula vehicula.</p>
                        <a className="purchase" href="#">Purchase</a>
                    </div>
                </div>
          </div>
        </section>
        </React.Fragment>
    );
  }
}

export default Product;
