import { useContext, useState, useEffect } from 'react';
import { IDContext } from "../hooks/GetPostID.jsx"

const GETMEPOSTPLEASE = async(postID) => {
    return await require("../items.json").find(item => item.id === postID)
}

export function GetPost() {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("none");
    const [body, setBody] = useState([{
        "color": "rgb(0 0 0)",
        "subtitle": "none",
        "text": "none none"
    }]);
    const [post, setPost] = useState({
        "id": 0,
        "data": {
            "Image": "https://www.meme-arsenal.com/memes/9fe6cc1c35cad75d7419f6fb81e36403.jpg",
            "ava": "https://www.meme-arsenal.com/memes/9fe6cc1c35cad75d7419f6fb81e36403.jpg",
            "title": "Волк",
            "body": [{
                    "color": "rgb(200 100 150)",
                    "subtitle": "Волки очень молодцы",
                    "text": "ляляля тополя"
                },
                {
                    "color": "rgb(150 100 145)",
                    "subtitle": "Волки могут тебя съесть",
                    "text": "ляляля АЙ укусил((("
                }
            ]
        }
    })
    const postID = useContext(IDContext).postID;

    GETMEPOSTPLEASE(postID)
        .then(post => {
            setPost(post)
        })
    return { post }
}