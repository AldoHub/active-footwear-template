import React, { Component } from 'react';
import Header from "./header";
import img1 from "../assets/images/paul-volkmer-522844-unsplash.jpg";
import img2 from "../assets/images/redd-angelo-14425-unsplash.jpg";
import img3 from "../assets/images/joseph-barrientos-82309-unsplash.jpg";
import img4 from "../assets/images/oliver-kiss-492188-unsplash.jpg";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />  
     
        <section>
      
          <h2>Quality Footwear.</h2>
          <div>
           <p>Duis aliquet vitae elit et blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ante id est placerat, vel ullamcorper quam sagittis. Vestibulum non tortor lobortis, porttitor neque in, posuere sem.</p> 
           <br />
           <p>Suspendisse potenti. Phasellus varius bibendum ante ac semper. Quisque viverra eget nisi in viverra. Duis ex risus, vulputate in euismod ac, tempus vel velit. Maecenas ut varius nulla. Sed libero ligula, mollis eget tincidunt vitae, euismod at lorem. Ut turpis tortor, vehicula in tempor non, ullamcorper ac purus. </p>
        
          </div>
         
        </section>
        
        <section className="imgGrid">
          <img src={img1}  />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
        </section> 
       
        </React.Fragment>
    );
  }
}

export default Main;
