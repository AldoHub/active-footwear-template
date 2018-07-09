import React from "react";
import { Switch, Route} from "react-router-dom";

//import the modules
import Main from "./components/main";
import About from "./components/about";
import Products from "./components/products";
import Product from "./components/product";

const Routing = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product/:id" component={Product} />
        </Switch>
    </div>    
) 

export default Routing;