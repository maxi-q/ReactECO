import React from 'react'
import {Link, Outlet} from "react-router-dom";
import Button from "react-bootstrap/Button";

const MainWindow = () => {
    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    marginBottom: "1rem"
                }}
            >
                <div className={"MainButtonBox"}>
                    <Button variant="success" className={"MainButton"}>Факт!</Button>{' '}
                    <Link to="./Card">Вход</Link>

                </div>
            </nav>
            <Outlet />
        </div>

    );
}

export default MainWindow;