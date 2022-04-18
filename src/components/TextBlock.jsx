import React, { useContext } from 'react';
import GiveRevard from '../config/GiveRevard';
import { IDContext } from "../hooks/GetPostID.jsx"

const CheckItem = (item) => {
    const Profiles = require("../data.json")
    const Items = Profiles.find(item => item.UUID === "wasd333").achivements.split(' ').map(parseFloat)
    return Items.indexOf(item) !== -1
}

const TextBlock = (props) => {
    const postID = useContext(IDContext).postID;
    
    if (postID === 1) { 
        CheckItem(1) ? GiveRevard(0) : console.log() }

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