import { Outlet, Link } from "react-router-dom";
import React from "react";

export default function App() {
    return (
        <div className="App">
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/MainWindow">MainWindow</Link> |{" "}
                <Link to="/SignUp">Регистрация</Link> |{" "}
                <Link to="/logIn">Вход</Link>
            </nav>
            <Outlet />
        </div>
    );
}
