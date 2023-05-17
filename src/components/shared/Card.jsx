import React from "react";
import { Button } from "./Button";

export const Card = (props) => {
  const { src, title, description, link } = props;
  return (
    <div>
      <img src={src} height={200} width={200} alt="" className="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        View More
      </a>
      <Button title="View More" onClick={() => alert("Test card button")} />
    </div>
  );
};
