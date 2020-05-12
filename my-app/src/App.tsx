import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Backboard } from "./pages/Backboard";
import { Contact } from "./pages/Contact";
import { NavBar } from "./components/NavBar";

function App() {
  return <NavBar />;
}

export default App;
