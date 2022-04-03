import React from 'react';
import {Container, Image, Stack} from "react-bootstrap";

const FourthBlock = () => {
    const img =
        "https://img2.freepng.ru/20180411/vuw/kisspng-penrose-triangle-isometric-projection-optical-illu-isometric-5acd8b94703078.8028741215234200524595.jpg";

    return (
        <div className="FourDiv">
            <Container className="ProjectManDiv">
                <h2 style={{marginLeft:"50px", paddingBottom:"20px"}}>Это наш проект</h2>
                <Stack direction="horizontal" gap={3}>
                    <div>
                        <Stack style={{marginLeft:"100px"}} direction="horizontal" gap={2}>
                            <Image src={img} roundedCircle="true" style={{ width: "100px" }}/>
                            <div >
                                <h4>Максим</h4>
                                <h5>frontend</h5>
                            </div>
                        </Stack>
                    </div>
                    <div style={{marginRight:"100px"}} className={"ms-auto"}>
                        <Stack  direction="horizontal" gap={3}>
                            <Image src={img} roundedCircle="true" style={{ width: "100px" }}/>
                            <div >
                                <h4>Алексей</h4>
                                <h5>backend</h5>
                            </div>
                        </Stack>
                    </div>
                </Stack>
            </Container>
        </div>

    );
};

export default FourthBlock;