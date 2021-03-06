import React from "react";
import { useParams } from "react-router-dom";
import bc from "../../pics/bc.png";

const brunetti = {
  logo: bc,
  businessName: "Brunetti Carlton",
  date: "05 Mar 2021",
  transactionId: "B106",
  total: 14.21,
};

const Receipt = () => {
  const transactionId = useParams();
  return (
    <div>
      <h1>Receipt</h1>
    </div>
  );
};

export default Receipt;
