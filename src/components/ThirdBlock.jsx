import React from 'react';
import {Container, Card} from "react-bootstrap";

const ThirdBlock = () => {
    const bgImage = "https://million-wallpapers.ru/wallpapers/6/40/442655473086481/osennyaya-tropa-v-tumannom-lesu.jpg";
    return (
        <Container>
            <h2 style={{marginLeft:"50px"}}>Что здесь делать?</h2>
            <Card className="bg-dark text-white">
                <Card.Img style={{height:"200px"}} src={bgImage} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text style={{fontSize:"20px", color:"Black"}}>
                        Столь же велико, как и значение растений. Многие растения опыляются только животными, что животные играют большую роль и в распространении семян некоторых растений. К этому следует добавить, что животные наряду с бактериями принимают самое активное участие в образовании почвы. Дождевые черви, муравьи и другие мелкие животные постоянно вносят в почву органические вещества, измельчают их и тем самым способствуют созданию перегноя. Через норки этих роющих животных легче проникают к корням необходимые для жизни растений вода и воздух.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
};

export default ThirdBlock;