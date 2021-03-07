import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Contexts";
import { firebase } from "../../firebase/config";

import ReceiptPreview from "../ReceiptPreview";
import Receipt from "../Receipt";

const Home = () => {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);
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
    func().then(() => setLoading(false));
  }, []);

  return (
    <div class="dash-main">
      <div class="userDashTop mt-5" style={{ marginLeft: "10%" }}>
        <div align="center" class="h1 mt-5">
          Hello <strong style={{ color: "green" }}>{user.fullName}</strong>
        </div>
      </div>
      <div align="center" class="h1 mt-3">
        Receipts Dasboard
      </div>
      <div class="container insideDash mt-4" style={{ marginLeft: "10%" }}>
        {loading ? (
          <div></div>
        ) : selectedReceipt ? (
          <Receipt
            receipt={selectedReceipt}
            setSelectedReceipt={setSelectedReceipt}
            items={allItems.get(selectedReceipt.transactionId)}
          />
        ) : (
          <div className="row">
            <div className="col">
              <ReceiptPreview
                logo={allLogos.get(demoReceipts[0].transactionId)}
                receipt={demoReceipts[0]}
                setSelectedReceipt={setSelectedReceipt}
              />
              <ReceiptPreview
                logo={allLogos.get(demoReceipts[1].transactionId)}
                receipt={demoReceipts[1]}
                setSelectedReceipt={setSelectedReceipt}
              />
            </div>
            <div className="col float-right">
              <ReceiptPreview
                logo={allLogos.get(demoReceipts[2].transactionId)}
                receipt={demoReceipts[2]}
                setSelectedReceipt={setSelectedReceipt}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
