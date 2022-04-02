import React from "react";
import Head from "../components/Head.jsx";
import FirstBlock from "../components/FirstBlock";
import SecondBlock from "../components/SecondBlock";
import ThirdBlock from "../components/ThirdBlock";
import FourthBlock from "../components/FourthBlock";

const StartWindow = () => {
  const img =
    "https://img2.freepng.ru/20180411/vuw/kisspng-penrose-triangle-isometric-projection-optical-illu-isometric-5acd8b94703078.8028741215234200524595.jpg";

  return (
    <div>
      <Head imageSrc={img}/>
      <FirstBlock/>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
    </div>
  );
};

export default StartWindow;
