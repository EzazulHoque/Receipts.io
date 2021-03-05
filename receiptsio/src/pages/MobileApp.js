import React from "react";
import end from '../pics/end.png';
const MobileApp = () => 
<div>
    <div class="container pad-10">
        <div align="center" class="h1 mb-3">Mobile App</div>
            <div align="center">
                <div class="iPhone">
                    <div class="topBar mt-5">
                        <div class="h2 mt-5" style={{float:"left", marginLeft:"5%"}}>Hello Ezaz!</div>
                        <div class="circle mt-4" style={{float:"right", marginRight:"5%"}}><img src={end} style={{width:"79px"}} /></div>
                    </div>
                    <div class="h1 mt-5" style={{marginRight:"35%"}}>
                    Dashboard
                    </div>
                    <div class="dash">
                    {/* This is where users will be able to scroll through receipts */}
                    </div>
                    <div class="botNav">

                    </div>
                </div>
            </div>
    </div>
</div>;

export default MobileApp;