import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
