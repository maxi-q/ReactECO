import React from 'react';
import {Col, Container, Image, Row, Stack} from "react-bootstrap";
import Free from "../images/Free.png"
import Razvivaysia from "../images/Razvivaysia.png"
import Revards from "../images/Revards.png"
import Sorevnovania from "../images/Sorevnovania.png"
import Friends from "../images/frends.png"

const SecondBlock = () => {
    const image = "https://freepngimg.com/thumb/xbox/55630-8-gaming-free-photo-png.png";
    return (
        <div className="SecDiv">
            <Container >
                <Row>
                    <Col>
                        <div>
                            <Stack className="CardSecBlock" direction="horizontal" gap={2}>
                                <Image className={"CardImage"} src={Free}/>
                                <Stack gap={2}>
                                    <h5 style={{whiteSpace: "nowrap"}}>Это бесплатно!</h5>
                                    <h6>Тут текст<br/>Текст<br/>Текст</h6>
                                </Stack>
                            </Stack>
                            <Stack className="CardSecBlock" direction="horizontal" gap={2}>
                                <Image className={"CardImage"} src={Revards} style={{height: "7em", width: "7em"}}/>
                                <Stack gap={2} style={{}}>
                                    <p style={{marginLeft:"auto", marginRight:"28%"}}>
                                        <h5>Достижения</h5>
                                        <h6>Тут текст<br/>Текст<br/>Текст</h6>
                                    </p>
                                </Stack>
                            </Stack>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Stack className="CardSecBlock" direction="horizontal" gap={2}>
                                <Image className={"CardImage"} src={Razvivaysia}/>
                                <Stack gap={2}>
                                    <h5>Развивайся!</h5>
                                    <h6>Тут текст<br/>Текст<br/>Текст</h6>
                                </Stack>
                            </Stack>
                            <Stack className="CardSecBlock" direction="horizontal" gap={2}>
                                <Image className={"CardImage"} src={Sorevnovania}/>
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
                                <Image className={"CardImage"} src={Friends}/>
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