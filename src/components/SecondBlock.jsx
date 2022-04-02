import React from 'react';
import {Col, Container, Image, Row, Stack} from "react-bootstrap";

const SecondBlock = () => {
    const image = "https://freepngimg.com/thumb/xbox/55630-8-gaming-free-photo-png.png";
    return (
        <div className="SecDiv">
            <Container >
                <Row>
                    <Col>
                        <div>
                            <Stack className="CardSecBlock" direction="horizontal" gap={2}>
                                <Image className={"CardImage"} src={image}/>
                                <Stack gap={2}>
                                    <h5>Это бесплатно!</h5>
                                    <h6>Тут текст<br/>Текст<br/>Текст</h6>
                                </Stack>
                            </Stack>
                            <Stack className="CardSecBlock" direction="horizontal" gap={2}>
                                <Image className={"CardImage"} src={image}/>
                                <Stack gap={2}>
                                    <h5>Достижения</h5>
                                    <h6>Тут текст<br/>Текст<br/>Текст</h6>
                                </Stack>
                            </Stack>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Stack className="CardSecBlock" direction="horizontal" gap={2}>
                                <Image className={"CardImage"} src={image}/>
                                <Stack gap={2}>
                                    <h5>Развивайся!</h5>
                                    <h6>Тут текст<br/>Текст<br/>Текст</h6>
                                </Stack>
                            </Stack>
                            <Stack className="CardSecBlock" direction="horizontal" gap={2}>
                                <Image className={"CardImage"} src={image}/>
                                <Stack gap={2}>
                                    <h5>Соревнуйся</h5>
                                    <h6>Тут текст<br/>Текст<br/>Текст</h6>
                                </Stack>
                            </Stack>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Stack className="CardSecBlock" direction="horizontal" gap={2}>
                                <Image className={"CardImage"} src={image}/>
                                <Stack gap={2}>
                                    <h5>Играй!</h5>
                                    <h6>Тут текст<br/>Текст<br/>Текст</h6>
                                </Stack>
                            </Stack>
                            <Stack className="CardSecBlock" direction="horizontal" gap={2}>
                                <Image className={"CardImage"} src={image}/>
                                <Stack gap={2}>
                                    <h5>Играй с друзьями</h5>
                                    <h6>Тут текст<br/>Текст<br/>Текст</h6>
                                </Stack>
                            </Stack>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default SecondBlock;