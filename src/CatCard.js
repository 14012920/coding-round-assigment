import React from "react";
import "./App.css";
const CatCard = ({ item }) => {
  return (
    <>
      <div className="card-body">
        <img
          src={item?.images}
          height={"100px"}
          width={"100px"}
          alt={item.title}
        />
      </div>
      <div className="card-title">
        <h3> {item?.title}</h3>
      </div>
    </>
  );
};

export default CatCard;
