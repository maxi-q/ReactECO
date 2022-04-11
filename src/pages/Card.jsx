import React from 'react';
import animal from '../images/animal.jpg';
import TextBlock from "../components/TextBlock";

const Card = () => {
    return (
        <div style={{backgroundColor:"rgba(152, 207, 141, 0.8)", paddingTop:"1rem"}}>
            <div className={"Card"}>
                <img src={animal} className={"CardImg"} alt="1111"/>
                <TextBlock color={'rgb(111, 204, 173)'}/>
            </div>
        </div>
        
    );
};

export default Card;
