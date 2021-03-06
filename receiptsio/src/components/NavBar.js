import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { UserContext } from "../Contexts";

const NavBar = ({ logout }) => {
  const user = useContext(UserContext);
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

            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/pricing"
              >
                Pricing
              </Link>
            </Nav.Link>
            {/* <Link to="/pricing">Pricing</Link> */}
            <Nav.Link>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/demo"
              >
                Demo
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/about-us"
              >
                About Us
              </Link>
            </Nav.Link>
            {/* <Link to="/demo">Demo</Link>
            <Link to="/about-us">About Us</Link> */}
          </Nav>
          <Nav style={{ fontSize: "20px" }}>
            {user ? (
              <Nav.Link style={{ color: "black" }} eventKey="3">
                <Link to="/">
                  <button
                    class="btn btn-outline-success btn-lg"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </Link>
              </Nav.Link>
            ) : (
              <div>
                <Nav.Link
                  style={{ color: "black", display: "inline-block" }}
                  eventKey="3"
                >
                  <Link to="/Login">
                    <button class="btn btn-outline-dark btn-lg">Login</button>
                  </Link>
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black", display: "inline-block" }}
                  eventKey="3"
                  href="/Register"
                >
                  <button class="btn btn-outline-dark btn-lg">Register</button>
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
