import React, { useState } from 'react';
import { GetPost } from "../config/GetPost";
import TextBlock from './TextBlock'

const razwod = (body) => {
    const a=[]
    body.forEach(el => {
        a.push(<TextBlock value={{color: el.color, title: el.subtitle, text: el.text}}/>)
    });
    return a
}

const CardTextBlock = () => {
    const post = GetPost()
    const a = razwod(post.post.data.body)
    return (
        <div>
            <img src={post.post.data.Image} className={"CardImg"} alt="1111"/>
            { a }
        </div>
    );
};

export default CardTextBlock;