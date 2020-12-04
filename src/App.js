import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import HomePage from "./components/HomePage";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";




export default function App() {

  return (
    <Router>
      <div className="container">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={AboutPage}>
          </Route>
          <Route path="/contact" component={ContactPage}>
          </Route>
          <Route path="/" component={HomePage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

