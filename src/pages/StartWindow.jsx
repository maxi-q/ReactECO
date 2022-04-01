import React from "react";
import Head from "../components/Head.jsx";
import FirstBlock from "../components/FirstBlock";
import SecondBlock from "../components/SecondBlock";

const StartWindow = () => {
  const img =
    "https://img2.freepng.ru/20180411/vuw/kisspng-penrose-triangle-isometric-projection-optical-illu-isometric-5acd8b94703078.8028741215234200524595.jpg";

  return (
    <div>
      <Head imageSrc={img}/>
      <FirstBlock/>
      <SecondBlock/>
    </div>
  );
};

export default StartWindow;
