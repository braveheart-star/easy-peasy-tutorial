import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Basket from "./basket";
import Header from "./header";
import Product from "./product";
import ProductList from "./product-list";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route
            path="/product/:id"
            render={({ match }) => (
              <Product id={parseInt(match.params.id, 10)} />
            )}
          />
          <Route path="/basket" exact component={Basket} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
