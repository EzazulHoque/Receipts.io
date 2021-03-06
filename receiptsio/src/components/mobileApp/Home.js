import React from "react";
import end from "../../pics/end.png";
import wl from "../../pics/wl.png";
import bc from "../../pics/bc.png";
import ds from "../../pics/ds.png";




const Home = () => (
  <div>
    <div class="topBar mt-5">
      <div class="h2 mt-5" style={{ float: "left", marginLeft: "5%" }}>
        Hello Ezaz!
      </div>
      <div class="circle mt-4" style={{ float: "right", marginRight: "5%" }}>
        <img src={end} style={{ width: "79px" }} />
      </div>
    </div>
    <div class="h1 mt-5" style={{ marginRight: "35%" }}>
      Dashboard
    </div>
    <div class="dash">
      {/* This is where users will be able to scroll through receipts */}

      {/* Need another routung for the smaller receipts */}
        <div class="smlRcp mt-4">
          <div class="row mt-3">
            <div class="col">
              <img src={bc} style={{width:"92px", marginLeft:"20%", marginTop:"25%", borderRadius:"20px"}} />
            </div>
            <div class="col" style={{float:"left"}}> 
              <div class="h6">Brunetti Carlton</div>
              <div class="h6">05 Mar 2021</div>
              <div class="h6">B106</div>

            </div>
            <div class="col">
              <div class="mon h5" style={{marginTop:"30%"}}>$14.21</div>
            </div>
          </div>
        </div>
        <div class="smlRcp mt-4">
          <div class="row mt-3">
            <div class="col">
              <img src={wl} style={{width:"92px", marginLeft:"20%", marginTop:"5%", borderRadius:"20px"}} />
            </div>
            <div class="col" style={{float:"left"}}> 
              <div class="h6">Woolsworth</div>
              <div class="h6">04 Mar 2021</div>
              <div class="h6">83456</div>

            </div>
            <div class="col">
              <div class="mon h5" style={{marginTop:"30%"}}>$21.52</div>
            </div>
          </div>
        </div>
        <div class="smlRcp mt-4 mb-3">
          <div class="row mt-3">
            <div class="col">
              <img src={ds} style={{width:"92px", marginLeft:"20%", marginTop:"25%", borderRadius:"20px"}} />
            </div>
            <div class="col" style={{float:"left"}}> 
              <div class="h6">Daiso Japan</div>
              <div class="h6">03 Mar 2021</div>
              <div class="h6">3049683456</div>

            </div>
            <div class="col">
              <div class="mon h5" style={{marginTop:"30%"}}>$14</div>
            </div>
          </div>
        </div>
    </div>
  </div>
);

export default Home;
