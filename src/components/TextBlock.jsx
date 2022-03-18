import React from 'react';
import {GetPost} from "../config/GetPost";


const TextBlock = (props) => {
    const post = GetPost()
    console.log(post);

    return (
        <div className={"CardBlock"} style={{backgroundColor: props.color}}>
            <div className={"CardText"}>
                <p className={"CardMainText"}>{post.title}</p>
                {post.body}
            </div>
        </div>
    );
};

export default TextBlock;