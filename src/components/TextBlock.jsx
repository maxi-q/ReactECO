import React from 'react';

const TextBlock = (props) => {
    return (
        <div className={"CardBlock"} style={{backgroundColor: props.value.color}}>
            <div className={"CardText"}>
                <p className={"CardMainText"}>{props.value.title}</p>
                {props.value.text}
            </div>
        </div>
    );
};

export default TextBlock;