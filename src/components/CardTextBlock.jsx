import React from "react";
import { GetPost } from "../config/GetPost";
import TextBlock from "./TextBlock";

const razwod = (body) => {
  const content = body.map((post) => (
    <TextBlock
      value={{ color: post.color, title: post.subtitle, text: post.text }}
    />
  ));
  return content;
};

const CardTextBlock = () => {
  const post = GetPost();
  const a = razwod(post.post.data.body);
  return (
    <div>
      <img src={post.post.data.Image} className={"CardImg"} alt="1111" />
      <div className="CardTitleBox"><h3 className="CardTitle">{ post.post.data.title }</h3></div>
      
      {a}
    </div>
  );
};

export default CardTextBlock;
