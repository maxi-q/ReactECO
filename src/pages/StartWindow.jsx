import React from "react";
import Head from "../components/Head.jsx";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const StartWindow = () => {
  const img =
    "https://img2.freepng.ru/20180411/vuw/kisspng-penrose-triangle-isometric-projection-optical-illu-isometric-5acd8b94703078.8028741215234200524595.jpg";
  const imgInBlock =
    "https://s1.1zoom.ru/big3/136/Foxes_Glance_Foliage_536041_3000x2000.jpg";
  return (
    <div>
      <Head imageSrc={img} />
      <div className="firstBlock">
        <Container>
          <Row>
            <Col>
              <Image src={imgInBlock} className="OnlyImage"></Image>
            </Col>
            <Col>
              <Card
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                  borderColor: "rgba(0,0,0,0)",
                  width: "90%"
                }}
              >
                <Card.Body>
                  <Card.Title>Light Card Title</Card.Title>
                  <Card.Body className="BodyInCard">
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default StartWindow;
