import React from 'react';
import { render } from "react-dom";
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'

import {Route, Routes} from "react-router";
import MainWindow from "./pages/MainWindow";
import SignUp from "./pages/SignUp";
import {BrowserRouter} from "react-router-dom";
import LogIn from "./pages/LogIn";
import Card from "./pages/Card";

const rootElement = document.getElementById("root");




function Main() {
    return (
        <BrowserRouter className="App">
            <Routes>
                <Route path="/" element={<App />}>

                        <Route path="MainWindow"  element={<MainWindow/>}>
                            <Route path="Card" element={<Card/>}/>
                        </Route>

                    <Route path="signUp" className="registrationCard"  element={<div className="registrationCard"><SignUp/></div>}/>
                    <Route path="logIn" className="registrationCard"  element={<div className="registrationCard"><LogIn/></div>}/>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Ошибка!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

render(
    <Main />,
    rootElement
);

