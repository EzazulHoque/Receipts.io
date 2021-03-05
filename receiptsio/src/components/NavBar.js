import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <div class="nav-container">
      <Navbar
        collapseOnSelect
        expand="xl"
        variant="light"
        style={{ padding: "10px" }}
      >
        <Link to="/">
          <Navbar.Brand style={{ fontSize: "30px" }}>Receipts.io</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" style={{ fontSize: "20px" }}>
            <NavDropdown
              title="Reciepts"
              id="dropdown-basic"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <div style={{ width: "1000px" }}>
                <div class="row">
                  <div class="col">
                    <NavDropdown.Item style={{ borderRadius: "10px" }}>
                      <h2>Simple</h2>
                      <p>
                        Simple and timeless, with a traditional structured
                        layout. <br /> A perfect artistic look.
                      </p>
                    </NavDropdown.Item>
                    <NavDropdown.Item style={{ borderRadius: "10px" }}>
                      {" "}
                      <h2>Professional</h2>
                      <p>
                        The finest designs for displaying professionalism,{" "}
                        <br /> dependability and proficiency.
                      </p>
                    </NavDropdown.Item>
                  </div>

                  <div class="col">
                    <NavDropdown.Item style={{ borderRadius: "10px" }}>
                      {" "}
                      <h2>Creative</h2>
                      <p>
                        A exclusive look that is ideal for creative businesses{" "}
                        <br /> and extant companies.
                      </p>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item style={{ borderRadius: "10px" }}>
                      {" "}
                      <h2>Modern</h2>
                      <p>
                        The new and trendy feeling of the forward-thinking{" "}
                        <br /> businesses in innovative fields
                      </p>
                    </NavDropdown.Item>
                  </div>
                </div>
              </div>
            </NavDropdown>

            <Link to="/pricing">Pricing</Link>
            <Link to="/demo">Demo</Link>
            <Link to="/about-us">About Us</Link>
          </Nav>
          <Nav style={{ fontSize: "20px" }}>
            <Nav.Link style={{ color: "black" }} eventKey="3" href="/Login">
              <button class="btn btn-outline-success btn-lg">Login</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
