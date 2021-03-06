import React from "react";

const Receipt = ({ receipt, setSelectedReceipt, items }) => {
  return <div>
  {/* General Store */}
  <div class="bigRcp mt-5">
  {/* Top Header */}
    <div class="h1 mt-2">
      Springvale General Store
    </div>
    <div class="row">
      <div class="col" style={{marginLeft:"6%"}}>
      POS: 84561
      </div>
      <div class="col" style={{marginRight:"10%"}}>
        {receipt.date}
      </div>
    </div>
    {/* TopBar */}
    <div class="genTop">
      <div class="h1 mt-1">
        $21.50
      </div>
    </div>
    {/* Mid Section */}
    <div class="row mt-4">
    <div style={{marginLeft:"5%"}} class="line"></div>
      <div class="col mt-2">
        <div align="center" class="h3" style={{marginLeft:"5%"}}>
          Description
        </div>
          <div style={{marginLeft:"2%"}} class="h6 mt-3">Banana Canvendish 1.177 kg</div>
          <div style={{marginLeft:"2%"}} class="h6 mt-4">Tomato Gourmet Loose 0.428kg</div>
          <div style={{marginLeft:"2%"}} class="h6 mt-4">Melon Honeydew</div>

      </div>
      <div class="col mt-2">
      <div class="h3">
          Amount
        </div>
        <div style={{marginLeft:"2%"}} class="h6 mt-4">$ 4.12</div>
        <div style={{marginLeft:"2%"}} class="h6 mt-5">$ 3.90</div>
        <div style={{marginLeft:"2%"}} class="h6 mt-4">$ 3.00</div>

      </div>
      <div style={{marginLeft:"5%"}} class="line"></div>
      </div>
      {/* Total Section */}
      <div class="row mt-4">
            <div class="col">
              <div class="h3">Total</div>
            </div>
            <div class="col">
              <div class="h3">$11.02</div>
            </div>
          </div>
  </div>
  <div class="mt-5">
    <button
      class="btn btn-outline-dark btn-lg"
      onClick={() => setSelectedReceipt(null)}
    >
      Back
    </button>
  </div>
</div>;
};

export default Receipt;
