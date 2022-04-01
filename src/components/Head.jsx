import React from "react";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";

const Head = (props) => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Navbar.Brand href="#home">ReactECO</Navbar.Brand>
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
            <Image src={props.imageSrc} roundedCircle="true" style={{ width: "50px" }}/>
          </Nav.Link>
          <Nav>
            <Navbar>
              <Nav.Link href="#profile">
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "15px",
                    marginBottom: "0px"
                  }}
                >
                  Профиль <br />
                  Name Surname
                </p>
              </Nav.Link>
            </Navbar>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Head;
