import React from "react";
import bc from "../../pics/bc.png";
import wl from "../../pics/wl.png";
import ds from "../../pics/ds.png";


const ReceiptsList = () => 
<div>
    <div class="container">
        <div class="h1 mt-5">
        Previous receipts
        </div>

        <div class="input-group mb-3">
            <input type="text" class="form-control" style={{width:"50%"}} placeholder="Search Receipts" aria-label="Recipient's username"/>
                <div class="input-group-append">
                    <span class="btn btn-outline-dark" id="basic-addon2">Search</span>
                </div>
        </div>
        <div class="h2 mt-4" style={{float:"left"}}>
        March 2021
        </div>

        <div style={{marginTop:"30%"}}>
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
</div>;

export default ReceiptsList;
