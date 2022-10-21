/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
const Card = ({ item }) => {
  return (
    <>
      <div className="cards-body">
        <img
          src={item?.images?.["Poster Art"].url}
          height={"100%"}
          width={"100%"}
        />

        <h3> {item?.title}</h3>
      </div>
    </>
  );
};

export default Card;
