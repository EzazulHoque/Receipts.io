import React, { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            alert(error);
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

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

  if (loading) {
    return <div></div>;
  } else {
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
}

export default App;
