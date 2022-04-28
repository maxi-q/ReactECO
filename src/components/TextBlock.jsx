import React, { useContext } from 'react';
import { IDContext } from "../hooks/GetPostID.jsx"
import Cookies from 'universal-cookie';

const CheckItem = (item) => {
    const cookies = new Cookies()
    const Items = cookies.get('profile', [true]).achivements.split(' ').map(parseFloat)
    return Items.indexOf(item) !== -1
}

const TextBlock = (props) => {
    const postID = useContext(IDContext).postID;
    

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