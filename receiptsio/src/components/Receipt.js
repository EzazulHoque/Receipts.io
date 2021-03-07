import React from "react";

const CloseButton = ({ setSelectedReceipt }) => (
  <button
    type="button"
    className="close close-button"
    aria-label="Close"
    onClick={() => setSelectedReceipt(null)}
  >
    <span aria-hidden="true">&times;</span>
  </button>
);

const Receipt = ({ receipt, setSelectedReceipt, items }) => {
  if (receipt.style === "detailed") {
    return (
      <div>
        {/* This the original cafe one */}
        <div class="bigRcp mt-5">
          <CloseButton setSelectedReceipt={setSelectedReceipt} />
          <div class="mt-5 text-center">
            <h1>{receipt.businessName}</h1>
          </div>
          <div>
            <div class="row ml-auto mr-auto">
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
            <div class="line ml-auto mr-auto"></div>
            <div class="row mt-4 ml-auto mr-auto">
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
            <div class="row mt-4 ml-auto mr-auto text-center">
              <div class="col">
                <div class="h3">Total</div>
              </div>
              <div class="col">
                <div class="h3">${receipt.total}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (receipt.style === "simple") {
    return (
      <div>
        {/* Bakery Shop */}
        <div class="bigRcp">
          <CloseButton setSelectedReceipt={setSelectedReceipt} />
          {/* Top Header */}
          {/* TopBar */}
          <div class="genTopB mt-4 ml-auto mr-auto">
            <div class="h4 mt-4 text-center">Khin & Kim Bakery</div>
          </div>
          {/* Mid Section */}
          <div className="mt-5">
            <div class="row ml-auto mr-auto my-3">
              <div class="col h6">Almond croissant</div>
              <div class="col text-right h6">$ 4.12</div>
            </div>
            <div class="row ml-auto mr-auto my-3">
              <div class="col h6">Choclate eclair</div>
              <div class="col text-right h6">$ 3.90</div>
            </div>
            <div class="row ml-auto mr-auto my-3">
              <div class="col h6">Long Machiato</div>
              <div class="col text-right h6">$ 3.00</div>
            </div>
          </div>
          {/* Total Section */}
          <div class="row mt-5 ml-auto mr-auto text-center">
            <div class="col">
              <div class="h3">Total</div>
            </div>
            <div class="col">
              <div class="h3">$11.02</div>
            </div>
          </div>
          <div class="line ml-auto mr-auto"></div>
        </div>
      </div>
    );
  } else if (receipt.style === "bold") {
    return (
      <div>
        {/* General Store */}
        <div class="bigRcp mt-5">
          <CloseButton setSelectedReceipt={setSelectedReceipt} />
          {/* Top Header */}
          <div class="h1 mt-2 text-center">Springvale General Store</div>
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
            <div class="h1 text-center">$21.50</div>
          </div>
          <div class="line ml-auto mr-auto my-2"></div>
          {/* Mid Section */}
          <div>
            <div class="row">
              <div class="col h3">Description</div>
              <div class="col h3">Amount</div>
            </div>
            <div class="row">
              <div class="col h6">Banana Canvendish 1.177 kg</div>
              <div class="col h6 align-middle">$ 4.12</div>
            </div>

            <div class="row">
              <div class="col h6">Tomato Gourmet Loose 0.428kg</div>
              <div class="col h6 align-middle">$ 3.90</div>
            </div>

            <div class="row">
              <div class="col h6">Melon Honeydew</div>
              <div class="col h6 align-middle">$ 3.00</div>
            </div>
          </div>
          <div class="line ml-auto mr-auto"></div>
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
      </div>
    );
  }
};

export default Receipt;
