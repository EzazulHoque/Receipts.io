import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "./Home";
import ReceiptsList from "./ReceiptsList";
/* import Settings from "./Settings.js"; */

const CustomerDashboard = () => {
  const match = useRouteMatch();

  return (
    <div class="container userDash">
      <Switch>
        <Route path={`${match.path}receipts-list`}>
          <ReceiptsList />
        </Route>
        {/* <Route path={`${match.path}settings`}>
          <Settings />
        </Route> */}
        <Route path={`${match.path}`}>
          <Home />
        </Route>
      </Switch>

      {/* Navigation Bar */}
      <div class="row text-center nav-bar">
        <Link className="text-dark col ml-5 nav-box" to={`${match.url}`}>
          Home
        </Link>
        <Link
          className="text-dark col nav-box border-left border-right"
          to={`${match.url}receipts-list`}
        >
          Receipts List
        </Link>
        <Link
          className="text-dark col mr-5 nav-box"
          to={`${match.url}settings`}
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default CustomerDashboard;
