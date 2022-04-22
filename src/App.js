import { Outlet, Link } from "react-router-dom";
import React from "react";
import ContextGetPostId from "./hooks/GetPostID";
import ContextGetProfile from "./hooks/GetProfile";

import Footer from "./components/Footer";
import Head from "./components/Head";

export default function App() {
    const img =
        "https://img2.freepng.ru/20180411/vuw/kisspng-penrose-triangle-isometric-projection-optical-illu-isometric-5acd8b94703078.8028741215234200524595.jpg"
    return ( <
        div className = "App" >
        <
        ContextGetPostId >
        <
        nav style = {
            {
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
            }
        } >
        <
        Link to = "/MainWindow"
        style = {
            { marginLeft: "20px" } } > MainWindow < /Link> |{" "} <
        Link to = "/StartWindow" > StartWindow < /Link> |{" "} <
        Link to = "/SignUp" > Регистрация < /Link> | <Link to="/logIn
        ">Вход</Link> <
        /nav> <
        ContextGetProfile >
        <
        Head imageSrc = { img }
        /> <
        Outlet / >
        <
        Footer / >
        <
        /ContextGetProfile> <
        /ContextGetPostId> <
        /div>
    );
}