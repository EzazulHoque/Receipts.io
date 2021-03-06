import React, { useState, useEffect } from "react";
import ReceiptPreview from "./ReceiptPreview";
import Receipt from "./Receipt";
import end from "../../pics/end.png";
import wl from "../../pics/wl.png";
import bc from "../../pics/bc.png";
import ds from "../../pics/ds.png";
import { firebase } from "../../firebase/config";

const brunetti = {
  logo: bc,
  businessName: "Brunetti Carlton",
  date: "05 Mar 2021",
  transactionId: "B106",
  total: 23,
};

const woolworths = {
  logo: wl,
  businessName: "Woolworths",
  date: "04 Mar 2021",
  transactionId: "83456",
  total: 23.5,
};

const daiso = {
  logo: ds,
  businessName: "Daiso Japan",
  date: "03 Mar 2021",
  transactionId: "3049683456",
  total: 14,
};

const Home = () => {
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
