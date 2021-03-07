import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <main>
          <div className="container">
            <Switch>
              <Route path="/makeup-showroom" exact component={Home} />
              <Route path="/makeup-showroom/products" component={Products} />
              <Route path="/makeup-showroom/about" component={About} />
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
