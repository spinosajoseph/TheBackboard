import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Backboard } from "./pages/Backboard";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/users">
            <Backboard />
          </Route>
          <Route path="/">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
