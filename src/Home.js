import React from "react";
import "./App.css";
import CatCard from "./CatCard";
import Cimema from "./assets/placeholder.png";
import Header from "./Header";
import HeaderTitle from "./HeaderTitle";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const cat = [
  {
    title: "Popular Movies",
    images: "./assets/placeholder.png",
    type: "MOVIE",
  },
  {
    title: "Popular Series",
    images: "./assets/placeholder.png",
    type: "SERIES",
  },
];
const Home = () => {
  return (
    <div className="Container">
      <HeaderTitle type={"Titles"} />
      <div className="card-wrapper">
        {cat.map((item) => (
          <Link to={`./PopularCardListing/${item.type}`}>
            <CatCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
