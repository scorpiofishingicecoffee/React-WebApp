import "./App.css";
import Home from "./Home";
import Games from "./Games";
import Contact from "./Contact";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
      return (
        <Router>
          <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Games">About Us</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path="/Home" element={<Home />}></Route>
              <Route exact path="/Games" element={<Games />}></Route>
              <Route exact path="/Contact" element={<Contact />}></Route>
            </Routes>
          </div>
        </Router>
      );
  }
};

export default Navbar;
