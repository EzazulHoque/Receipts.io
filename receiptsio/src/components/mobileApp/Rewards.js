import React from "react";

const Rewards = () => 
<div>
    <div class="container">
        <div class="h2 mt-5">Get rewards as you store more receipts</div>
        <div class="rwd mt-5">
            <div class="row">
                <div class="col">
                    <div class="h5 mt-3">
                    Reward coins
                    </div>
                    <div class="h4 mt-2">
                     Available reward coins:
                    </div>
                </div>
                <div class="col">
                    <br/>
                    <br/>
                    <div style={{float:"left"}} class="rwdC">
                        <div class="h2 mt-2">740pts</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="rwdr mt-5">
            <div class="row">
                <div class="col">
                    <div class="h5 mt-4" style={{marginLeft:"1%"}}>
                    Redeem
                    </div>
                    <div class="h6 mt-2" style={{marginLeft:"1%"}}>
                    Get $10 Apple Gift card for 1000pts.
                    </div>

                </div>
                <div class="col">
                    <button class="btn btn-outline-dark btn-lg mt-5"> Redeem</button>
                </div>  
            </div>
        </div>
        <div class="rwdr mt-5">
            <div class="row">
                <div class="col">
                    <div class="h5 mt-4" style={{marginLeft:"1%"}}>
                    Redeem
                    </div>
                    <div class="h6 mt-2" style={{marginLeft:"1%"}}>
                    Get $50 Coles Gift card for 5000pts.
                    </div>

                </div>
                <div class="col">
                    <button class="btn btn-outline-dark btn-lg mt-5"> Redeem</button>
                </div>  
            </div>
        </div>
    </div>
</div>;

export default Rewards;
