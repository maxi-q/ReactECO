import React from 'react';
import animal from '../img/animal.jpg';
import TextBlock from "../components/TextBlock";

const Card = () => {
    return (
        <div className={"Card"}>
            <img src={animal} className={"CardImg"} alt="1111"/>
            <TextBlock color={'rgb(111, 204, 173)'}/>
        </div>
    );
};

export default Card;
