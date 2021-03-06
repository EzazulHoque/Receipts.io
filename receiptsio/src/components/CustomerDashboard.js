import React, { useContext } from "react";
import { UserContext } from "../Contexts";

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
          <div>

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
