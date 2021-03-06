import React from "react";
import { Link, useParams } from "react-router-dom";
import bc from "../../pics/bc.png";

const brunetti = {
  logo: bc,
  businessName: "Brunetti Carlton",
  date: "05 Mar 2021",
  transactionId: "B106",
  total: 14.21,
};

const Receipt = () => {
  console.log(brunetti.logo);
  const transactionId = useParams();
  return (
    <div>
      <h1>Receipt</h1>
      <Link to="/mobile-demo">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Receipt;
