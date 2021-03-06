import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "./Home";
import ReceiptsList from "./ReceiptsList";
/* import Settings from "./Settings"; */

const CustomerDashboard = () => {
  const match = useRouteMatch();
  return (
    <div style={{ padding: "5%" }}>
      <div class="container">
        <div class="userDash">
          <Switch>
            <Route path={`${match.path}`}>
              <Home />
            </Route>
            <Route path={`${match.path}/receipts-list`}>
              <ReceiptsList />
            </Route>
            {/* <Route path={`${match.path}/settings`}>
              <Settings />
            </Route> */}
          </Switch>
          <div class="row mt-4">
            {/* Need to conver the divs below like the mobile app demo */}
            <div align="right" class="col">
              <Link to={`${match.url}`}>Home</Link>
            </div>
            <div align="center" class="col">
              <Link to={`${match.url}/receipts-list`}>Receipts List</Link>
            </div>
            <div align="left" class="col">
              <Link to={`${match.url}/settings`}>Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
