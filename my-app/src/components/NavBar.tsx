import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Backboard } from "../pages/Backboard";
import { AboutMe } from "../pages/AboutMe";
import { Contact } from "../pages/Contact";
import { Box } from "@material-ui/core";

const InlineNavigationBar = styled.ul`
  display: inline;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const RouteItem = styled.li`
  display: inline;
`;

export const NavBar = () => {
  return (
    <Router>
      <div>
        <nav>
          <InlineNavigationBar>
            <Box display="flex" flexDirection="row">
              <Box display="flex" justifyContent="center" order={2} mx="auto">
                <RouteItem>
                  <Link to="/">Backboard</Link>
                </RouteItem>
              </Box>
              <Box display="flex" justifyContent="center" order={1} mx="auto">
                <RouteItem>
                  <Link to="/about">About</Link>
                </RouteItem>
              </Box>
              <Box display="flex" justifyContent="center" order={3} mx="auto">
                <RouteItem>
                  <Link to="/contact">Contact</Link>
                </RouteItem>
              </Box>
            </Box>
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
