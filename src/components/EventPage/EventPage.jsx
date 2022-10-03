import React from "react";
import EventImage from "../../assets/Event_image.png";
import "./EventPage.css";

const EventPage = () => {
  return (
    <div className="eventpage-wrapper">
      <div className="eventpage-main">
        <div className="event-description">
          <h2 className="event-name">{} //Event Name here</h2>
          <p>
            Hosted by <strong>{}</strong> //Host Name
          </p>

          <div>
            <div>📅</div>
            <div className="event-start">
              <strong>18 August 6:00PM // satrt</strong>
            </div>
            <div className="event-end">
              to <strong>{}</strong> UTC +10
            </div>
          </div>

          <div>
            <div></div>
            <div className="event-end">
              <strong>Street name</strong>
            </div>
            <div>{}//location</div>
          </div>
        </div>

        <div className="eventpage-image-container">
          <img src={EventImage} alt="created_event_image" />
        </div>
      </div>
    </div>
  );
};

export { EventPage };
