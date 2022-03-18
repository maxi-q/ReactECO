import React, {useContext} from 'react';
import IDContext from "../hooks/GetPostID";

const ToCard = (navigate) => {
    const a = useContext(IDContext).GetPostID;
    navigate('/MainWindow/Card')

};

export default ToCard;