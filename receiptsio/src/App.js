import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Pricing from "./pages/Pricing";
import Demo from "./pages/Demo";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
