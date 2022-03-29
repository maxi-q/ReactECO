import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Image from 'react-bootstrap/Image'


const StartWindow = () => {
    const img = "https://img2.freepng.ru/20180411/vuw/kisspng-penrose-triangle-isometric-projection-optical-illu-isometric-5acd8b94703078.8028741215234200524595.jpg"
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
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
                            <Image src={img} roundedCircle="true" style={{width:"50px"}}></Image>
                        </Nav.Link>
                        <Nav>
                            <Navbar href="#home">
                                <Nav.Link href="#start">
                                    <p style={{fontSize: '13px', lineHeight: '3px' }}>Профиль</p>
                                    <p style={{fontSize: '13px', lineHeight: '1px' }}>Name Surname</p>
                                </Nav.Link>
                            </Navbar>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default StartWindow;