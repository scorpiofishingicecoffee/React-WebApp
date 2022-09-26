import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Games from "./Games";
import Developers from "./Developers";
import Stores from "./Stores";
import NotFound from "./NotFound";


class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <button className="App-btn">
              <Link to="/Home">Home</Link>
            </button>
            <button className="App-btn">
              <Link to="/Games">RAWG Video Games Database</Link>
            </button>
            <button className="App-btn">
              <Link to="/Developers">Video Games Developers</Link>
            </button>
            <button className="App-btn">
              <Link to="/Stores">Video Games Storefront</Link>
            </button>
          </ul>
          <Routes>
            <Route exact path="/Home" element={<Home />}></Route>
            <Route exact path="/Games" element={<Games />}></Route>
            <Route exact path="/Developers" element={<Developers />}></Route>
            <Route exact path="/Stores" element={<Stores />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Navbar;
