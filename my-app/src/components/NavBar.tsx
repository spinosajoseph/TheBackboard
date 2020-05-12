import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Backboard } from "../pages/Backboard";
import { AboutMe } from "../pages/AboutMe";
import { Contact } from "../pages/Contact";

const InlineNavigationBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
`;

export const NavBar = () => {
  return (
    <Router>
      <div>
        <nav>
          <InlineNavigationBar>
            <li>
              <Link to="/">The Backboard</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </InlineNavigationBar>
        </nav>

        <Switch>
          <Route exact path="/">
            <Backboard />
          </Route>
          <Route exact path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
