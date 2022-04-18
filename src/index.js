import React from 'react';
import { render } from "react-dom";
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'

import { Route, Routes } from "react-router";
import MainWindow from "./pages/MainWindow";
import SignUp from "./pages/SignUp";
import { BrowserRouter } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Card from "./pages/Card";
import StartWindow from "./pages/StartWindow";
import Profile from "./pages/Profile";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import CallBack from "./pages/CallBack";
import AboutUs from "./pages/AboutUs";
import NewPost from "./pages/NewPost";
import Friends from "./pages/Friends";

const rootElement = document.getElementById("root");




function Main() {
    return ( <
            BrowserRouter className = "App" >
            <
            Routes >
            <
            Route path = "/"
            element = { < App / > } >
            <
            Route path = "/"
            element = { < StartWindow / > }
            /> <
            Route path = "MainWindow"
            element = { < MainWindow / > } >
            <
            Route path = "Card"
            element = { < Card / > }
            /> <
            /Route> <
            Route path = "signUp"
            className = "registrationCard"
            element = { < div className = "registrationCard" > < SignUp / > < /div>}/ >
                <
                Route path = "logIn"
                className = "registrationCard"
                element = { < div className = "registrationCard" > < LogIn / > < /div>}/ >
                    <
                    Route path = "StartWindow"
                    element = { < div > < StartWindow / > < /div>}/ >
                        <
                        Route path = "Profile"
                        element = { < div > < Profile / > < /div>}/ >
                            <
                            Route path = "FAQ"
                            element = { < div > < FAQ / > < /div>}/ >
                                <
                                Route path = "Reviews"
                                element = { < div > < Reviews / > < /div>}/ >
                                    <
                                    Route path = "CallBack"
                                    element = { < div > < CallBack / > < /div>}/ >
                                        <
                                        Route path = "AboutUs"
                                        element = { < div > < AboutUs / > < /div>}/ >
                                            <
                                            Route path = "NewPost"
                                            element = { < div > < NewPost / > < /div>}/ >
                                                <
                                                Route path = "Friends"
                                                element = { < div > < Friends / > < /div>}/ >
                                                    <
                                                    Route
                                                    path = "*"
                                                    element = { <
                                                        main style = {
                                                            { padding: "1rem" } } >
                                                        <
                                                        p > Ошибка! < /p> <
                                                        /main>
                                                    }
                                                    /> <
                                                    /Route> <
                                                    /Routes> <
                                                    /BrowserRouter>
                                                )
                                            }

                                            render( <
                                                Main / > ,
                                                rootElement
                                            );