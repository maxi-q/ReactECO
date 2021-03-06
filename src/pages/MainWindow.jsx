import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ToCard from "../config/ToCard";
import { IDContext } from "../hooks/GetPostID";
import { GetPost } from "../config/GetPost";


const MainWindow = () => {
  let navigate = useNavigate();
  const a = useContext(IDContext);


  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px"
        }}
      >
        <div className={"MainButtonBox"}>
          <Button
            onClick={() => {ToCard(navigate, a)}}
            variant="success"
            className={"MainButton"}
          >
            Факт!
          </Button>{" "}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainWindow;
