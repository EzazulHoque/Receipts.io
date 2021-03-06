import React, { useContext } from "react";
import { UserContext } from "../Contexts";
import bc from "../pics/bc.png";
import wl from "../pics/wl.png";
import ds from "../pics/ds.png";


const CustomerDashboard = () => {
  const user = useContext(UserContext);
  return (<div style={{padding:"5%"}}>
  <div class="container">
    <div class="userDash">
      <div class="userDashTop mt-5" style={{marginLeft:"10%"}}>
        <div align="center" class="h1 mt-5">Hello <strong style={{color:"green"}}>{user.fullName}</strong></div>
      </div>
        <div align="center" class="h1 mt-3">
        Receipts Dasboard
        </div>
        <div class="insideDash mt-4" style={{marginLeft:"10%"}}>
          <div class="row">

            <div class="col" style={{marginLeft:"5%"}}>
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
            </div>

            <div class="col">
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
            </div>

            <div class="col" style={{marginLeft:"5%"}}>
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
            </div>
          </div>
        </div>
        <div class="row mt-4">
        {/* Need to conver the divs below like the mobile app demo */}
      <div align="right" class="col">
        Home
      </div>
      <div align="center" class="col">
        Receipts List
      </div>
      <div align="left" class="col">
        Settings
      </div>
    </div>
    </div>
  </div>
  </div>)
  ;
};

export default CustomerDashboard;
