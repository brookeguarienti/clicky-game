import React from "react";
import "./imgContainer.css";

const Cards = (props) => (
  <div className="card" onClick={() => props.handleClickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Cards;
