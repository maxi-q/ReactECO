import React from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";

const FirstBlock = () => {
    const imgInBlock =
        "https://s1.1zoom.ru/big3/136/Foxes_Glance_Foliage_536041_3000x2000.jpg";
    return (
        <div className="firstBlock">
            <Container>
                <Row>
                    <Col>
                        <Image src={imgInBlock} className="OnlyImage"/>
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
                                               borderRadius:"10px"
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