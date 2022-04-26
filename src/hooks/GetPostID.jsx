import React, {useState, createContext} from 'react';

export const IDContext = createContext();

const ContextGetPostId = (props) => {
    const [postID, setPostID] = useState(0);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const GetPostID = () => {
        const num = getRandomInt(0, require("../items.json").length - 1)
        console.log(num)
        setPostID(num);
        return num
    };

    const value = {
        postID,
        GetPostID
    };

    return (
        <IDContext.Provider value={value}>
            {props.children}
        </IDContext.Provider>
    );
};

export default ContextGetPostId;