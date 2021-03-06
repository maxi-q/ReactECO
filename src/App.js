import { Outlet, Link } from "react-router-dom";
import React from "react";
import ContextGetPostId from "./hooks/GetPostID";
import ContextGetProfile from "./hooks/GetProfile";
import Cookies from 'universal-cookie';

import Footer from "./components/Footer";
import Head from "./components/Head";
import { Button } from "react-bootstrap";

export default function App() {
    const img =
        "https://img2.freepng.ru/20180411/vuw/kisspng-penrose-triangle-isometric-projection-optical-illu-isometric-5acd8b94703078.8028741215234200524595.jpg"
    const cookies = new Cookies();
    if(typeof (cookies.get('profile', [true])) === "undefined"){
        const Profile = cookies.set('profile',
        { 
            "UUID": "0", 
            "name": "",
            "achivements": "", 
            "friends": "", 
            "unlocked_items": "" 
        }, { path: '/' })
    }
    

    return ( 
        <div className="App">
            <ContextGetPostId>
            < nav style = {
                {
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }
            }>
            <Link to = "/MainWindow" style = {{ marginLeft: "20px" } } > MainWindow </Link> |{" "} 
            <Link to = "/StartWindow" > StartWindow </Link> |{" "} 
            <Link to = "/SignUp" > Регистрация </Link> |{" "} 
            <Link to="/logIn">Вход</Link> |{" "}
            <Button onClick={()=>{cookies.set('profile',{"UUID": "0","name": "","achivements": "","friends": "","unlocked_items": ""}, { path: '/' })}} style={{'height':"20px", lineHeight:'10px'}}>delete</Button>
            </nav> 
                < ContextGetProfile >
                    <Head imageSrc = { img } /> 
                    <Outlet /> 
                    <Footer /> 
                </ContextGetProfile> 
            </ContextGetPostId> 
        </div>
    );
}