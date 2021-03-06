import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "./Home";
import { firebase } from "../../firebase/config";
import ReceiptsList from "./ReceiptsList";
/* import Settings from "./Settings"; */

const CustomerDashboard = () => {
  const match = useRouteMatch();
  const [demoReceipts, setDemoReceipts] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [allItems, setAllItems] = useState(null);
  const [allLogos, setAllLogos] = useState(new Map());

  useEffect(() => {
    const func = async () => {
      // get receipts associated with user Alan Cheng
      const doc = await firebase
        .firestore()
        .collection("users")
        .doc("ISglKE3x0QcfiOZPpxYI42C6Ujm2")
        .get();
      const receiptIds = doc.data().receipts;

      var receipts = [];
      var tempAllItems = new Map();
      var tempAllLogos = new Map();
      for (let i = 0; i < receiptIds.length; i++) {
        const receiptDoc = await firebase
          .firestore()
          .collection("receipts")
          .doc(receiptIds[i])
          .get();
        const receipt = receiptDoc.data();
        receipts.push(receipt);
        // get logo url for this receipt
        const url = await firebase
          .storage()
          .ref()
          .child(receipt.img)
          .getDownloadURL();
        tempAllLogos.set(receipt.transactionId, url);
        // get items for this receipt
        var tempItems = [];
        for (let i = 0; i < receipt.items.length; i++) {
          const itemDoc = await firebase
            .firestore()
            .collection("receiptItems")
            .doc(receipt.items[i])
            .get();
          tempItems.push(itemDoc.data());
        }
        tempAllItems.set(receipt.transactionId, [...tempItems]);
      }
      setDemoReceipts(receipts);
      setAllItems(tempAllItems);
      setAllLogos(tempAllLogos);
    };
    func();
  }, []);
  return (
    <div style={{ padding: "5%" }}>
      <div class="container">
        <div class="userDash">
          <Switch>
            <Route path={`${match.path}receipts-list`}>
              <ReceiptsList />
            </Route>
            {/* <Route path={`${match.path}/settings`}>
              <Settings />
            </Route> */}
            <Route path={`${match.path}`}>
              <Home />
            </Route>
          </Switch>
          <div class="row mt-4">
            {/* Need to conver the divs below like the mobile app demo */}
            <div align="right" class="col">
              <Link to={`${match.url}`}>Home</Link>
            </div>
            <div align="center" class="col">
              <Link to={`${match.url}receipts-list`}>Receipts List</Link>
            </div>
            <div align="left" class="col">
              <Link to={`${match.url}settings`}>Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
