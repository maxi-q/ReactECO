import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";

const Head = (props) => {
  const Profiles = require("../data.json");
  const Profile = Profiles.find((item) => item.UUID === "wasd333");

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Navbar.Brand>
            <Link
              to="/Profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              ReactECO
            </Link>
          </Navbar.Brand>

          <NavDropdown title="Link">
            <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
          </NavDropdown>
          <Nav className="me-auto">
            <Nav.Link href="#start">Старт</Nav.Link>
          </Nav>
        </Nav>
        <Nav>
          <Nav.Link href="#profile">
            <Image
              src={props.imageSrc}
              roundedCircle="true"
              className="HeadAvatar"
            />
          </Nav.Link>
          <Nav>
            <Navbar>
              <Nav>
                <Link
                  to="/Profile"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "15px",
                      marginBottom: "0px"
                    }}
                  >
                    Профиль: <br />
                    {Profile.name}
                  </p>
                </Link>
              </Nav>
            </Navbar>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Head;
