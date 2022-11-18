import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-container">
          <div className="text-container">
            <div className="text-box">
              <h1>Buy your First Pair of Shoes</h1>
              <p className="para">get upto 50% of on your first purchase</p>
              <button className="order-btn">Order Now</button>
            </div>
          </div>
          <div className="image-container">
            <img
              className="image-hero"
              src="./assets/hero-image.png"
              alt="shoe-hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
