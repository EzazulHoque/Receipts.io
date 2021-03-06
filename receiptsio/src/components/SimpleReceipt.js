import React from "react";

const Receipt = ({ receipt, setSelectedReceipt, items }) => {
  return (
    <div>
      {/* Bakery Shop */}
      <div class="bigRcp mt-5">
        {/* Top Header */}

        {/* <div class="row">
      <div class="col" style={{marginLeft:"6%"}}>
      POS: 84561
      </div>
      <div class="col" style={{marginRight:"10%"}}>
        {receipt.date}
      </div>
    </div> */}
        {/* TopBar */}
        <div class="genTopB mt-4">
          <div class="h4 mt-4">Khin & Kim Bakery</div>
        </div>
        {/* Mid Section */}
        <div class="row mt-5">
          {/* <div style={{marginLeft:"5%"}} class="line"></div> */}
          <div class="col mt-2">
            <div style={{ marginLeft: "3%" }} class="h6 mt-3">
              Almond croissant
            </div>
            <div style={{ marginLeft: "2%" }} class="h6 mt-4">
              Choclate eclair
            </div>
            <div style={{ marginLeft: "2%" }} class="h6 mt-4">
              Long Machiato
            </div>
          </div>
          <div class="col mt-2">
            {/* <div class="h3">
          Amount
        </div> */}
            <div style={{ marginLeft: "0%" }} class="h6 mt-4">
              $ 4.12
            </div>
            <div style={{ marginLeft: "2%" }} class="h6 mt-3">
              $ 3.90
            </div>
            <div style={{ marginLeft: "2%" }} class="h6 mt-4">
              $ 3.00
            </div>
          </div>
        </div>
        {/* Total Section */}
        <div class="row mt-5">
          <div class="col">
            <div class="h3">Total</div>
          </div>
          <div class="col">
            <div class="h3">$11.02</div>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div class="mt-5">
        <button
          class="btn btn-outline-dark btn-lg"
          onClick={() => setSelectedReceipt(null)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Receipt;
