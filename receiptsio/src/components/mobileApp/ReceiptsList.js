import React, { useState, useEffect } from "react";
import { firebase } from "../../firebase/config";
import Receipt from "./Receipt";
import ReceiptPreview from "./ReceiptPreview";
import bc from "../../pics/bc.png";
import wl from "../../pics/wl.png";
import ds from "../../pics/ds.png";

const ReceiptsList = () => {
  const [demoReceipts, setDemoReceipts] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  useEffect(() => {
    const func = async () => {
      const doc = await firebase
        .firestore()
        .collection("users")
        .doc("ISglKE3x0QcfiOZPpxYI42C6Ujm2")
        .get();
      if (!doc.exists) {
        alert("Could not find user");
        return;
      } else {
        const receiptIds = doc.data().receipts;
        var receipts = [];
        for (let i = 0; i < receiptIds.length; i++) {
          const receiptDoc = await firebase
            .firestore()
            .collection("receipts")
            .doc(receiptIds[i])
            .get();
          if (!receiptDoc.exists) {
            alert("Could not find receipt");
            return;
          }
          receipts.push(receiptDoc.data());
        }
        setDemoReceipts(receipts);
      }
    };
    func();
  }, []);
  if (selectedReceipt) {
    return (
      <Receipt
        receipt={selectedReceipt}
        setSelectedReceipt={setSelectedReceipt}
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
