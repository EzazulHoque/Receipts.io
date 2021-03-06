import React, { useEffect, useState } from "react";
import { firebase } from "../../firebase/config";
import ReceiptPreview from "../ReceiptPreview";
import Receipt from "../Receipt";

const ReceiptsList = () => {
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
      <div class="input-group my-5">
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
      <div class="row h2 my-4 mx-2">March 2021</div>
      <div className="row">
        <div className="col">
          {demoReceipts.map((receipt) => (
            <ReceiptPreview
              logo={allLogos.get(receipt.transactionId)}
              receipt={receipt}
              setSelectedReceipt={setSelectedReceipt}
            />
          ))}
        </div>
        <div className="col">
          {selectedReceipt ? (
            <Receipt
              receipt={selectedReceipt}
              setSelectedReceipt={setSelectedReceipt}
              items={allItems.get(selectedReceipt.transactionId)}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReceiptsList;
