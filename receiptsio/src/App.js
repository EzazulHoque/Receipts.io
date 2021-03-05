
import React,  { useState } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './App.css';

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
       <button class="btn btn-outline-primary btn-lg">Login</button>
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
            <button type="button" class="btn btn-success btn-lg">Create My Receipt</button>
            </div>
          </div>
        </div>
      </div>
      {/* End Of Landing */}
    </div>
  );
}

export default App;
