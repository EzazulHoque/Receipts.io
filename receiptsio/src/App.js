import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { firebase } from "./firebase/config";

import NavBar from "./components/NavBar";
import Pricing from "./pages/Pricing";
import Demo from "./pages/Demo";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import Home from "./pages/Home";
import MobileApp from "./pages/MobileApp";

function App() {
  const [user, setUser] = useState(null);

  const logout = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Router>
      <NavBar user={user} logout={logout} />
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
          <Login setUser={setUser} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/mobileApp">
          <MobileApp />
        </Route>
        <Route path="/user-home">
          <UserHome />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
