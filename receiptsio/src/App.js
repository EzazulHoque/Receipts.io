
import React,  { useState } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './App.css';
import fon from './pics/fon.png'
import hiw from './pics/HIW.png'

function App() {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }
  return (
    <div className="App">
      <div class="nav-container">
      <Navbar collapseOnSelect expand="xl"  variant="light"  style={{padding:"10px"}}>
        <Navbar.Brand style={{fontSize:"30px"}} href="#home">Receipts.io</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" style={{fontSize:"20px"}} >
                <NavDropdown 
                title="Reciepts" 
                id="dropdown-basic" 
                show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown} >

        <div style={{width:"1000px"}}>
          <div class="row">
            <div class="col">
              <NavDropdown.Item style={{borderRadius:"10px"}}>
                <h2>Simple</h2>
                <p>Simple and timeless, with a traditional structured layout. <br/> A perfect artistic look.</p>
              </NavDropdown.Item>
                <NavDropdown.Item style={{borderRadius:"10px"}}> <h2>Professional</h2>
                  <p>The finest designs for displaying professionalism, <br/> dependability and proficiency.</p></NavDropdown.Item>
            </div>

            <div class="col">
              <NavDropdown.Item style={{borderRadius:"10px"}}> <h2>Creative</h2>
                <p>A exclusive look that is ideal for creative businesses <br/> and extant companies.</p></NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item style={{borderRadius:"10px"}}> <h2>Modern</h2>
                <p>The new and trendy feeling of the forward-thinking <br/> businesses in innovative fields</p></NavDropdown.Item>
            </div>
          </div>
                </div>
      </NavDropdown>
      
      <Nav.Link href="/features">Features</Nav.Link>
      <Nav.Link href="/pricing">Pricing</Nav.Link>
      <Nav.Link href="/pricing">API</Nav.Link>
      <Nav.Link href="/demo">Demo</Nav.Link>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
    </Nav>
    <Nav style={{fontSize:"20px"}}>
      {/* <Nav.Link eventKey={2} href="/Login">
        Login
      </Nav.Link> */}
      <Nav.Link style={{color:"black"}} eventKey="3" href="/Login">
       <button class="btn btn-outline-success btn-lg">Login</button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
      {/* End of Nav Container */}
      
      <div class="landing">
        <div class="container">
          <div class="pad-10">
            <div align="center" class="h1 mt-5">
            Transform your local business into a more <strong style={{color:"green"}}>greener environment</strong> by using digital receipts.
            </div>
            <div align="center" class="h4 mt-5">
            Use professional receipt templates that follow the exact ‘traditional receipt structure’. Easy to use and done within minutes - try now for free!
            </div>
            <div align="center" class="mt-5">
            <button type="button" class="btn btn-success btn-lg">Create Receipt</button>
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
              Contribute to a <strong style={{color:"green"}}>greener environment</strong> by getting rid of <strong style={{color:"red"}}>paper reciepts</strong>
              </div>
                <div class="mt-5">
                  <div class="h3">Paper reciepts contribute to 30% of the world's pollution.</div>
                  <div class="h3 mt-3">3 million trees and 600,000 gallons of oil are used to make paper reciepts every year!</div>
                  <div class="h3 mt-3">In this new era of financial technology, it’s essential for businesses to take advantage of this technology and move to a greener approach.</div>
                </div>
            </div>
            {/* Right */}
            <div class="col">
            <img src={fon} style={{maxWidth:"100%"}} alt="Green" />
            </div>
          </div>
        </div>
      </div>
      {/* End Of Second Section */}

      <div class="thirdSection">
        <div class="container">
          <div align="center" class="h1">How does Receipts.io work?</div>
            <div class="container" style={{marginTop:"10%"}}>
              {/* <img src={hiw} style={{width:"50%"}}/> */}
                <div class="row">
                  <div class="col">
                    <div class="h1">It is really easy to use.</div>
                    <div class="h3 mt-5">It is really easy to use.</div>
                    <div class="h3 mt-5">1. Trust me it is easy to use.</div>
                    <div class="h3 mt-5">2. For real it is easy to use.</div>
                  </div>
                  <div class="col">
                  <img src={hiw} style={{width:"100%"}}/> 
                  </div>
                </div>
            </div>
        </div>
      </div>
      {/* End of Third Section */}

      <div class="fourthSection">
        <div class="container pad-10" style={{height:"100vh"}}>
          <div class="h1" style={{marginTop:"22%", color:"white"}} align="center">“How wonderful it is that nobody need wait a single moment before starting to improve the world.” - Anne Frank</div>
        </div>
      </div>
      {/* End of Fourth Section */}
      
      <div class="fifthSection">
          <div class="container">
            <div class="row">
              <div class="col" style={{padding:"3%"}}>
                <div class="h1">Let's start reducing the cutting down of trees and the excess consumption of oil by using digital receipts</div>
              </div>
              <div class="col">
              <div class="h1" style={{marginTop:"20%"}}>Get Started for free.</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
