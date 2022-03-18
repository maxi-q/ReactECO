import React, {useState, createContext} from 'react';

export const IDContext = createContext();

const ContextGetPostId = (props) => {
    const [postID, setPostID] = useState(11);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const GetPostID = () => {
        setPostID(getRandomInt(1, 100));
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