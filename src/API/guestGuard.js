
import React from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../config/constant';
import {Link} from "react-router-dom";

const GuestGuard = ({ children }) => {
    const account = useSelector((state) => state.account);
    const { isLoggedIn } = account;

    if (isLoggedIn) {
        return <Link to={BASE_URL} />;
    }
    return <React.Fragment>{children}</React.Fragment>;
};

export default GuestGuard;