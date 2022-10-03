import React from "react";
import "./HomePage.css";
import LandingPageLogo from "../../assets/Landing_page_image.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <div className="homepage-main">
        <section>
          <img
            src={LandingPageLogo}
            height="580px"
            alt="homepage_image"
            className="img-container"
          />
        </section>

        <section>
          <div>
            <span className="homepage-desc">
              Imagine if Snapchat had events.
            </span>
            <p className="homepage-desc-inner">
              Easily host and share events with your friends across any social
              media.
            </p>

            <div>
              <Link to="/create">
                <button className="btn-create-event">🎉 Create my event</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { HomePage };
