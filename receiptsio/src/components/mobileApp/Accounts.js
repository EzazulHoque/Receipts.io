import React from "react";
import end from "../../pics/end.png";

const Accounts = () => 
<div>
    <div class="container">
        <div class="mt-5">
        <div class="circle mt-4" style={{width:"92px", height:"90px"}}>
        <img src={end} style={{ width: "92px" }} />
      </div>

        </div>
        <div class="h1 mt-5">
        Hello Ezaz!
        </div>
        <div class="h2 mt-5">
        <u>Scan a receipt</u>
        </div>
        <div class="h2 mt-5">
        <u>Change profile photo</u>
        </div>
        <div class="h2 mt-5">
        <u>Change Password</u>
        </div>
        <div class="h2 mt-5">
        <u>Refer to a friend</u>
        </div>
        <div class="h2 mt-5">
        <u>Logout</u>
        </div>
    </div>
</div>;

export default Accounts;
