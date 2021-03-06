import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "./ReceiptPreview.css";

const ReceiptPreview = ({ receipt }) => {
  const match = useRouteMatch();
  return (
    <Link
      to={`${match.url}/receipt/` + receipt.transactionId}
      className="receipt-preview"
    >
      <div class="smlRcp mt-4">
        <div class="row mt-3">
          <div class="col">
            <img
              src={receipt.logo}
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
            <div class="h6">{receipt.transactionId}</div>
          </div>
          <div class="col">
            <div class="mon h5" style={{ marginTop: "30%" }}>
              ${receipt.total}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReceiptPreview;
