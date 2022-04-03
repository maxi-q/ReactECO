import React, {useContext, useState} from 'react';
import {httpGet} from "./Requests";
import {IDContext} from "../hooks/GetPostID.jsx"


export function GetPost() {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const postID = useContext(IDContext).postID;

    httpGet('https://jsonplaceholder.typicode.com/posts/' + postID)
        .then(json => {
            setTitle(json.id);
            setBody(json.body);
        });
    return {title, body}
}