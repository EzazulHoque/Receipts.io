import React, { useState, useEffect } from "react";
import ReceiptPreview from "./ReceiptPreview";
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
  total: 14.21,
};

const woolworths = {
  logo: wl,
  businessName: "Woolworths",
  date: "04 Mar 2021",
  transactionId: "83456",
  total: 21.52,
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
  useEffect(() => {
    const docRef = firebase
      .firestore()
      .collection("users")
      .doc("ISglKE3x0QcfiOZPpxYI42C6Ujm2");
    docRef.get().then((doc) => {
      if (!doc.exists) {
        alert("No such document");
      } else {
        const receiptIds = doc.data().receipts;
        const receiptsRef = firebase.firestore().collection("receipts");
        var receipts = [];
        for (let i = 0; i < receiptIds.length; i++) {}
      }
    });
  }, []);

  return (
    <div>
      <div class="topBar mt-5">
        <div class="h2 mt-5" style={{ float: "left", marginLeft: "5%" }}>
          Hello Ezaz!
        </div>
        <div class="circle mt-4" style={{ float: "right", marginRight: "5%" }}>
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
          <ReceiptPreview receipt={receipt} />
        ))}
      </div>
    </div>
  );
};

export default Home;
