import React, { useState, useEffect } from "react";
import { firebase } from "../../../firebase/config";

const ReceiptPreview = ({ receipt, setSelectedReceipt }) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const loadLogo = async () => {
      const url = await firebase
        .storage()
        .ref()
        .child("bc.png")
        .getDownloadURL();
      setImgUrl(url);
    };
    loadLogo();
  }, []);

  return (
    <div class="smlRcp mt-4" onClick={() => setSelectedReceipt(receipt)}>
      <div class="row mt-3">
        <div class="col">
          <img
            src={imgUrl}
            alt="logo"
            style={{
              width: "92px",
              marginLeft: "20%",
              marginTop: "25%",
              borderRadius: "20px",
            }}
          />
        </div>
        <div class="col" style={{ float: "left" }}>
          <div class="h6">{receipt.businessName}</div>
          <div class="h6">{receipt.date}</div>
          <div class="h6">{receipt.uid}</div>
        </div>
        <div class="col">
          <div class="mon h5" style={{ marginTop: "30%" }}>
            ${receipt.total}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
