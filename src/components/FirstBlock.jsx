import React from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import animal from "../images/animal.jpg"

const FirstBlock = () => {
    return (
        <div className="firstBlock">
            <Container>
                <Row>
                    <Col className="OnlyImage">
                        <Image src={animal} className="Image"/>
                    </Col>
                    <Col>
                        <Card
                            style={{
                                backgroundColor: "rgba(0,0,0,0)",
                                borderColor: "rgba(0,0,0,0)",
                                width: "100%"
                            }}
                        >
                            <Card.Body>
                                <Card.Title className={"fontSizeTitle"}>Го играть</Card.Title>

                                <Card.Body className="BodyInCard"
                                           style ={{
                                               borderRadius:"10px",
                                               backgroundColor:"rgb(172,152,110)"
                                           }}>
                                    <Card.Text className={"fontSizeBody"}>
                                        Столь же велико, как и значение растений. Многие растения опыляются только животными, что животные
                                        играют большую роль и в распространении семян некоторых растений.
                                        К этому следует добавить, что животные наряду с бактериями принимают самое активное участие в
                                        образовании почвы. Дождевые черви, муравьи и другие мелкие животные постоянно вносят в почву
                                        органические вещества, измельчают их и тем самым способствуют созданию перегноя. Через норки этих роющих
                                        животных легче проникают к корням необходимые для жизни растений вода и воздух.

                                    </Card.Text>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FirstBlock;