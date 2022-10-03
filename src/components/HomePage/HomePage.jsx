import React from "react";
import "./HomePage.css";
import LandingPageLogo from "../../assets/Landing_page_image.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-main">
      <section className="img-container">
        <img src={LandingPageLogo} alt="homepage_image" />
      </section>

      <section>
        <h1>Imagine if Snapchat had events.</h1>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
        <div>
          <Link to="/create">
            <button className="btn-create-event">🎉 Create my event</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export { HomePage };
