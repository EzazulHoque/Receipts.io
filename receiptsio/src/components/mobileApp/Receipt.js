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
  const transactionId = useParams();
  return (
    <div>
    <div class="bigRcp mt-5">
      <div class="mt-5">
        <h1>{brunetti.businessName}</h1>
        </div>
        <div>
          <div class="row">
            <div class="col">
              <div class="h6 mt-5">
                Receipt: {brunetti.transactionId}
              </div>
              <div class="h6 mt-2">
                Table no: B2
              </div>
            </div>
            <div class="col">
                <div class="h6" style={{marginTop:"44%"}}>
                {brunetti.date}
                </div>
            </div>
          </div>

          {/* Mid Section */}
          <div class="line"></div>
          <div class="row mt-4">
            <div class="col">
              <div style={{marginLeft:"20%"}} class="h6">
                Description
              </div>
              <div class="h6">
                Latte
              </div>
              <div style={{marginLeft:"25%"}} class="h6">
                Cappuccino
              </div>
              <div style={{marginLeft:"25%"}} class="h6">
                Cheesecake
              </div>
              <div style={{marginLeft:"25%"}} class="h6">
                Croissant
              </div>
            </div>
            <div class="col">
            <div align="center" class="h6">
                Quantity
              </div>
              <div align="center" class="h6">
                x1
              </div>
              <div align="center" class="h6">
                x1
              </div>
              <div align="center" class="h6">
                x1
              </div>
              <div align="center" class="h6">
                x1
              </div>

            </div>
            <div class="col">
            <div align="center" class="h6">
Price              </div>
              <div align="center" class="h6">
              $4.5
              </div>
              <div align="center" class="h6">
              $4.5
              </div>
              <div align="center" class="h6">
              $9
              </div>
              <div align="center" class="h6">
              $5
              </div>
            </div>
          </div>
          {/* Total Section */}
          <div class="row mt-4">
            <div class="col">
              <div class="h3">
              Total
              </div>
            </div>
            <div class="col">
            <div class="h3">
              $23
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="mt-5">
                  <Link to="/mobileApp">
        <button class="btn btn-outline-dark btn-lg">Back</button>
      </Link>
            </div>
    </div>
  );
};

export default Receipt;
