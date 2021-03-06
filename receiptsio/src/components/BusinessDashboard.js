import React, { useContext } from "react";
import { UserContext } from "../Contexts";
import {Bar, Line} from 'react-chartjs-2';

const state = {
  labels: ['Week 1', 'Week 2', 'Week 3',
           'Week 4'],
  datasets: [
    {
      label:"Customers",
      backgroundColor: '#008000',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 0,
      data: [24, 32, 55, 15, 0, "hours"]
    }
  ]
}

const state2 = {
  labels: ['Week 1', 'Week 2', 'Week 3',
  'Week 4'],
  datasets: [
    {
      label: 'Earnings',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'green',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [650, 590, 800, 810, 560]
    }
  ]
}

const BusinessDashboard = () => {
  const user = useContext(UserContext);
  return (
    <div>
      {/* Hello {user.fullName} from {user.businessName} */}
        <div class="container">
        <div class="cusDashTop mt-4" >
        <div align="center"  class="h1 mt-4">Good Morning, <strong style={{color:"black"}}>{user.fullName}</strong></div>
      </div>
      
        <div class="cusDash mt-5 mb-2">
        <div style={{marginLeft:"2%"}}  class="h1 mt-4">
        Dashboard for <strong style={{color:"green"}}> {user.businessName}</strong>
        </div>
          <div class="row mt-5">
              <div class="col">
                <div align="center" style={{marginLeft:"6%"}} class="insideDashc">
                  <div class="h2 mt-3"><strong>Receipts given out</strong></div>
                  <div class="h1 mt-5">Total Receipts: <strong>1237</strong></div>

                </div>
              </div>
              <div class="col">
              <div align="center" style={{marginLeft:"4%"}} class="insideDashc">
                  <div class="h2 mt-3"><strong>Earned this month</strong></div>
                  <div class="h1 mt-5">Total: <strong>$3237</strong></div>
                  <div class="h3 mt-4" style={{color:"green"}}>+23.1%</div>
                </div>
              </div>
              <div class="col">
              <div align="center"  class="insideDashc">
                  <div class="h2 mt-3"><strong>Total Growth</strong></div>
                  <div class="h1 mt-3">New Customers: <strong>60</strong></div>
                  <div class="h3 mt-2" style={{color:"green"}}>+67.4%</div>

                </div>
              </div>
            </div>
        <div class="insideDashcbig mt-5" style={{marginLeft:"2%"}}>
          <div class="row">
            <div class="col">
            <div class="mt-5">
        <Line
          data={state2}
          options={{
            title:{
              display:true,
              text:'Weekly profits',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
            </div>
            <div class="col">
            <div class="mt-5">
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Weekly Customers',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
            </div>
          </div>
        </div>
  {/* End of dash board */}
    </div>
        </div>
    </div>
  );
};

export default BusinessDashboard;
