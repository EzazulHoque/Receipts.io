import React, { useState, useEffect } from "react";
import { firebase } from "../../firebase/config";
import Receipt from "./Receipt";
import ReceiptPreview from "../ReceiptPreview";

const ReceiptsList = () => {
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
  if (selectedReceipt) {
    return (
      <Receipt
        receipt={selectedReceipt}
        setSelectedReceipt={setSelectedReceipt}
        items={allItems.get(selectedReceipt.transactionId)}
      />
    );
  } else {
    return (
      <div>
        <div class="container">
          <div class="h1 mt-5">Previous receipts</div>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              style={{ width: "50%" }}
              placeholder="Search Receipts"
              aria-label="Recipient's username"
            />
            <div class="input-group-append">
              <span class="btn btn-outline-dark" id="basic-addon2">
                Search
              </span>
            </div>
          </div>
          <div class="h2 mt-4" style={{ float: "left" }}>
            March 2021
          </div>

          <div style={{ marginTop: "30%" }}>
            {demoReceipts.map((receipt) => (
              <ReceiptPreview
                key={receipt.transactionId}
                logo={allLogos.get(receipt.transactionId)}
                receipt={receipt}
                setSelectedReceipt={setSelectedReceipt}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ReceiptsList;
