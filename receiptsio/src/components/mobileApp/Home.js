import React, { useState, useEffect } from "react";
import ReceiptPreview from "./ReceiptPreview";
import Receipt from "./Receipt";
import end from "../../pics/end.png";
import wl from "../../pics/wl.png";
import bc from "../../pics/bc.png";
import ds from "../../pics/ds.png";
import { firebase } from "../../firebase/config";

const Home = () => {
  const [demoReceipts, setDemoReceipts] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [allItems, setAllItems] = useState(null);

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
        var tempAllItems = new Map();
        for (let i = 0; i < receiptIds.length; i++) {
          const receiptDoc = await firebase
            .firestore()
            .collection("receipts")
            .doc(receiptIds[i])
            .get();
          const receipt = receiptDoc.data();
          console.log(receipt);
          receipts.push(receipt);
          var tempItems = [];
          for (let i = 0; i < receipt.items.length; i++) {
            const itemDoc = await firebase
              .firestore()
              .collection("receiptItems")
              .doc(receipt.items[i])
              .get();
            tempItems.push(itemDoc.data());
          }
          tempAllItems.set(receipt.transactionId, tempItems);
        }
        setDemoReceipts(receipts);
        setAllItems(tempAllItems);
      }
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
        <div class="topBar mt-5">
          <div class="h2 mt-5" style={{ float: "left", marginLeft: "5%" }}>
            Hello Ezaz!
          </div>
          <div
            class="circle mt-4"
            style={{ float: "right", marginRight: "5%" }}
          >
            <img src={end} style={{ width: "79px" }} />
          </div>
        </div>
        <div class="h1 mt-5" style={{ marginRight: "35%" }}>
          Dashboard
        </div>
        <div class="dash">
          {/* This is where users will be able to scroll through receipts */}

          {/* Need another routung for the smaller receipts */}
          {demoReceipts.map((receipt) => (
            <ReceiptPreview
              key={receipt.transactionId}
              receipt={receipt}
              setSelectedReceipt={setSelectedReceipt}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
