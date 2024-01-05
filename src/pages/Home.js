import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/pizza3.jpg";
import "../styles/Home.css";
export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Pizzaria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/Menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}
