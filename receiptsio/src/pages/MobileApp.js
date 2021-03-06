import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import Accounts from "../components/mobileApp/Accounts";
import Receipt from "../components/mobileApp/Receipt";
import ReceiptsList from "../components/mobileApp/ReceiptsList";
import Rewards from "../components/mobileApp/Rewards";
import Home from "../components/mobileApp/Home";

import hom from "../pics/homeButton.png";
import rcp from "../pics/receiptButton.png";
import rwd from "../pics/rewards.png";
import act from "../pics/account.png";

// Need these three routes that redirects to these pages
// Rewards - mobileApp/Rewards
// ReceiptLists - mobileApp/ReceiptsLists
// Account - mobileApp/Account

const MobileApp = () => {
  const match = useRouteMatch();
  return (
    <div>
      <div class="container pad-10">
        <div align="center" class="h1 mb-3">
          Mobile App
        </div>
        <div align="center">
          <div class="iPhone">
            <Switch>
              <Route path={`${match.path}/receiptsList`}>
                <ReceiptsList />
              </Route>
              <Route path={`${match.path}/receipt/:id`}>
                <Receipt />
              </Route>
              <Route path={`${match.path}/rewards`}>
                <Rewards />
              </Route>
              <Route path={`${match.path}/accounts`}>
                <Accounts />
              </Route>
              <Route path={`${match.path}`}>
                <Home />
              </Route>
            </Switch>
            <div class="botNav">
              <div class="row">
                <div class="col">
                  <Link to={`${match.url}`}>
                    <img
                      src={hom}
                      style={{ width: "48px", marginTop: "20%" }}
                    />
                  </Link>
                </div>
                <div class="col">
                  <Link to={`${match.url}/receiptsList`}>
                    <img
                      src={rcp}
                      style={{ width: "48px", marginTop: "20%" }}
                    />
                  </Link>
                </div>
                <div class="col">
                  <Link to={`${match.url}/rewards`}>
                    <img
                      src={rwd}
                      style={{ width: "48px", marginTop: "20%" }}
                    />
                  </Link>
                </div>
                <div class="col">
                  <Link to={`${match.url}/accounts`}>
                    <img
                      src={act}
                      style={{ width: "48px", marginTop: "20%" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileApp;
