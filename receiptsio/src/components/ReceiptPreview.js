import React from "react";

const ReceiptPreview = ({ logo, receipt, setSelectedReceipt }) => {
  return (
    <div class="smlRcp m-4 p-3" onClick={() => setSelectedReceipt(receipt)}>
      <div class="row d-flex align-items-center">
        <div class="col align-middle">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "92px",
            }}
          />
        </div>
        <div class="col align-middle float-left">
          <div class="h6">{receipt.businessName}</div>
          <div class="h6">{receipt.date}</div>
          <div class="h6">{receipt.uid}</div>
        </div>
        <div class="col">
          <div class="border h5 py-1 px-2 bg-white">${receipt.total}</div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
