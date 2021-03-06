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
import Home from "./pages/Home";

import { UserContext } from "./Contexts";

function App() {
  const [user, setUser] = useState(null);

  const logout = (event) => {
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
    <UserContext.Provider value={user}>
      <Router>
        <NavBar logout={logout} />
        <Switch>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/mobile-demo">
            <Demo />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
