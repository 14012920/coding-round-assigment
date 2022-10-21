import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Cinema from "./assets/placeholder.png";
import Header from "./Header";
import { useParams } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";
import Footer from "./Footer";

const cat = [
  { title: "Popular Movies", images: Cinema, type: "MOVIES" },
  { title: "Popular Series", images: Cinema, type: "SERIES" },
];
const PopularCardListing = () => {
  let { type } = useParams();
  const [data, setData] = useState(null);

  const getData = () => {
    fetch(`http://localhost:3000/feed/sample.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let filterdata = myJson?.entries.filter(
          (item) => item.programType === type.toLowerCase()
        );
        setData(filterdata);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <HeaderTitle type={type === "MOVIE" ? "Movies" : "Series"} />
      <div className="card-wrapper">
        {data && data.length && data.map((item) => <Card item={item} />)}
      </div>
    </>
  );
};

export default PopularCardListing;
