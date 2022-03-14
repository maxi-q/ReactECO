import React, {useContext} from 'react'
import { Link, Outlet, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import ToCard from "../config/ToCard";

const MainWindow = () => {
    let navigate = useNavigate();

    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    marginBottom: "1rem"
                }}
            >
                <div className={"MainButtonBox"}>
                    <Button onClick={ () => ToCard(navigate) } variant="success" className={"MainButton"}>Факт!</Button>{' '}
                    <Link to="./Card">Вход</Link>

                </div>
            </nav>
            <Outlet />
        </div>

    );
}

export default MainWindow;