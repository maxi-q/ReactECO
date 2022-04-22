import React, {useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import Cookies from 'universal-cookie';
import { ProfileContext } from "../hooks/GetProfile";

const Head = (props) => {
  const a = useContext(ProfileContext)
  const cookies = new Cookies()
  const [profile, setProfile] = useState(cookies.get('profile', [true]))
  useEffect(() => {
    setProfile(cookies.get('profile', [true]))
  }, [a.profile]);

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
              to="/StartWindow"
              style={{ textDecoration: "none", color: "black" }}
            >
              ReactECO
            </Link>
          </Navbar.Brand>

          <NavDropdown title="Link">
            <NavDropdown.Item>
              <Link to={"/Reviews"}>Отзывы</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to={"/AboutUs"}>О нас</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to={"/Faq"}>FAQ</Link>
            </NavDropdown.Item>
            <nav style={{ borderBottom: "solid 1px", margin: "0 9px" }} />
            <NavDropdown.Item>
              <Link to={"/CallBack"}>Бонус!</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav className="me-auto">
            <Nav.Link href="#start">
              <Link
                to="/MainWindow"
                style={{ textDecoration: "none", color: "black" }}
              >
                Старт
              </Link>
            </Nav.Link>
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
                    {profile.name}
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
