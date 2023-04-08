import React from "react";
import "../App.css";
import { Button } from "./Button";
import Footer from "./Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="hero-container">
        <video
          src={require("../images/assets/mp4/bg.mp4")}
          autoPlay
          loop
          muted
        />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
