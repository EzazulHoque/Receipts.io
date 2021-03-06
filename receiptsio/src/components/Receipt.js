import React from "react";

const Receipt = ({ receipt, setSelectedReceipt, items }) => {
  if (receipt.style === "detailed") {
    return (
      <div>
        {/* This the original cafe one */}
        <div class="bigRcp mt-5">
          <div class="mt-5">
            <h1>{receipt.businessName}</h1>
          </div>
          <div>
            <div class="row">
              <div class="col">
                <div class="h6 mt-5">Receipt: {receipt.transactionId}</div>
                <div class="h6 mt-2">Table no: B2</div>
              </div>
              <div class="col">
                <div class="h6" style={{ marginTop: "44%" }}>
                  {receipt.date}
                </div>
              </div>
            </div>

            {/* Mid Section */}
            <div class="line"></div>
            <div class="row mt-4">
              <div class="col">
                <div style={{ marginLeft: "20%" }} class="h6">
                  Description
                </div>
                {items.map((item) => (
                  <div style={{ marginLeft: "25%" }} class="h6">
                    {item.description}
                  </div>
                ))}
              </div>
              <div class="col">
                <div align="center" class="h6">
                  Quantity
                </div>
                {items.map((item) => (
                  <div align="center" class="h6">
                    {item.quantity}
                  </div>
                ))}
              </div>
              <div class="col">
                <div align="center" class="h6">
                  Price{" "}
                </div>
                {items.map((item) => (
                  <div align="center" class="h6">
                    ${item.price}
                  </div>
                ))}
              </div>
            </div>
            {/* Total Section */}
            <div class="row mt-4">
              <div class="col">
                <div class="h3">Total</div>
              </div>
              <div class="col">
                <div class="h3">${receipt.total}</div>
              </div>
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
      </div>
    );
  } else if (receipt.style === "simple") {
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
  } else if (receipt.style === "bold") {
    return (
      <div>
        {/* General Store */}
        <div class="bigRcp mt-5">
          {/* Top Header */}
          <div class="h1 mt-2">Springvale General Store</div>
          <div class="row">
            <div class="col" style={{ marginLeft: "6%" }}>
              POS: 84561
            </div>
            <div class="col" style={{ marginRight: "10%" }}>
              {receipt.date}
            </div>
          </div>
          {/* TopBar */}
          <div class="genTop">
            <div class="h1 mt-1">$21.50</div>
          </div>
          {/* Mid Section */}
          <div class="row mt-4">
            <div style={{ marginLeft: "5%" }} class="line"></div>
            <div class="col mt-2">
              <div align="center" class="h3" style={{ marginLeft: "5%" }}>
                Description
              </div>
              <div style={{ marginLeft: "2%" }} class="h6 mt-3">
                Banana Canvendish 1.177 kg
              </div>
              <div style={{ marginLeft: "2%" }} class="h6 mt-4">
                Tomato Gourmet Loose 0.428kg
              </div>
              <div style={{ marginLeft: "2%" }} class="h6 mt-4">
                Melon Honeydew
              </div>
            </div>
            <div class="col mt-2">
              <div class="h3">Amount</div>
              <div style={{ marginLeft: "2%" }} class="h6 mt-4">
                $ 4.12
              </div>
              <div style={{ marginLeft: "2%" }} class="h6 mt-5">
                $ 3.90
              </div>
              <div style={{ marginLeft: "2%" }} class="h6 mt-4">
                $ 3.00
              </div>
            </div>
            <div style={{ marginLeft: "5%" }} class="line"></div>
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
      </div>
    );
  }
};

export default Receipt;
