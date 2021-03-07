import React from "react";
import { Link } from "react-router-dom";
import fon from "../pics/fon.png";
import hiw from "../pics/HIW.png";

const Landing = () => {
  return (
    <div className="App">
      <div class="landing">
        <div class="container">
          <div class="pad-10">
            <div align="center" class="h1 mt-5">
              Transform your local business into a more{" "}
              <strong style={{ color: "green" }}>greener environment</strong> by
              using digital receipts.
            </div>
            <div align="center" class="h4 mt-5">
              Use professional receipt templates that follow the exact
              ‘traditional receipt structure’. Easy to use and done within
              minutes - try now for free!
            </div>
            <div align="center" class="mt-5">
            <Link to="/Login">
                    <button class="btn btn-success btn-lg">Create Receipt</button>
                  </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Of Landing */}

      <div class="secondSection">
        <div class="container">
          <div class="row">
            {/* Left */}
            <div class="col">
              <div class="h1">
                Contribute to a{" "}
                <strong style={{ color: "green" }}>greener environment</strong>{" "}
                by getting rid of{" "}
                <strong style={{ color: "red" }}>paper reciepts</strong>
              </div>
              <div class="mt-5">
                <div class="h3">
                Getting rid of paper receipts would save 12 billion pounds of carbon dioxide.                </div>
                <div class="h3 mt-3">
                  3 million trees and 600,000 gallons of oil are used to make
                  paper reciepts every year!
                </div>
                <div class="h3 mt-3">
                  In this new era of financial technology, it’s essential for
                  businesses to take advantage of this technology and move to a
                  greener approach.
                </div>
              </div>
            </div>
            {/* Right */}
            <div class="col">
              <img src={fon} style={{ maxWidth: "100%" }} alt="Green" />
            </div>
          </div>
        </div>
      </div>
      {/* End Of Second Section */}

      <div class="thirdSection">
        <div class="container">
          <div align="center" class="h1">
            How does Receipts.io work?
          </div>
          <div class="container" style={{ marginTop: "10%" }}>
            {/* <img src={hiw} style={{width:"50%"}}/> */}
            <div class="row">
              <div class="col">
                <div class="h2 mt-4">Just scan the QR code from the POS Software and collect your automated receipt immediately.</div>
                <div class="h3 mt-5">API allows the POS Software to generate receipts.</div>
                <div class="h3 mt-5">Customers without the mobile app can still scan the Qr code 
                and print the receipts.</div>
              </div>
              <div class="col">
                <img src={hiw} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Third Section */}

      <div class="fourthSection">
        <div class="container pad-10" style={{ height: "100vh" }}>
          <div
            class="h1"
            style={{ marginTop: "22%", color: "white" }}
            align="center"
          >
            “How wonderful it is that nobody need wait a single moment before
            starting to improve the world.” - Anne Frank
          </div>
        </div>
      </div>
      {/* End of Fourth Section */}

      <div class="fifthSection">
        <div class="container">
          <div class="row">
            <div class="col mb-5">
              <div class="h1">
                Let's start moving to a greener environment by changing the way we use receipts.
              </div>
            </div>
            <div class="col">
              <div class="h1" align="right" style={{ marginTop: "10%" }}>
                Get Started for free.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
