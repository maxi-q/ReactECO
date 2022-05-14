import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
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
                                        Как же интерестно иногда поиграть в кликер, или покрутить кейсы в эмуляторе кейсов cs:go, или,
                                        например, сыграть в обучающую игру с интерестными фактами о природе, в которой ты не просто получаешь 
                                        удовольствие от игры, так еще и получаешь тонну интерестной информации. В этой игре тебе встретятся факты о 
                                        экологии, о животных, растениях, природе в целом. Кроме того здесь присуствует игровой элемент, чтобы 
                                        тебе не было скучно, мы добавили достижения.Кроме того, ты сможешь сортвноваться с друзьями с помощью 
                                        системы лидеров и знакомств. Вперед к новым знаниям! 
                                        {/*Столь же велико, как и значение растений. Многие растения опыляются только животными, что животные
                                        играют большую роль и в распространении семян некоторых растений.
                                        К этому следует добавить, что животные наряду с бактериями принимают самое активное участие в
                                        образовании почвы. Дождевые черви, муравьи и другие мелкие животные постоянно вносят в почву
                                        органические вещества, измельчают их и тем самым способствуют созданию перегноя. Через норки этих роющих
                                        животных легче проникают к корням необходимые для жизни растений вода и воздух.*/}
                                        

                                    </Card.Text>
                                </Card.Body>
                                <div className='StartButtonBox'>
                                    <Link to="/MainWindow">
                                           <Button className='StartButton' variant='danger'>Погнали!</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FirstBlock;