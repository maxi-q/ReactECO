import React from 'react';
import CardTextBlock from "../components/CardTextBlock";

const Card = () => {
    
    return (
        <div style={{backgroundColor:"rgba(152, 207, 141, 0.8)", paddingTop:"1rem"}}>
            <div className={"Card"}>
                <CardTextBlock/>
            </div>
        </div>
        
    );
};

export default Card;
