import React from "react";
import EventImage from "../../assets/Event_image.png";
import { useEvent } from "../../context/event/EventContext";
import "./EventPage.css";

const EventPage = () => {
  const { eventData, setEventData } = useEvent();
  return (
    <div className="eventpage-wrapper">
      <div className="eventpage-main">
        <div className="event-description">
          <h2 className="event-name">{eventData.EVENT_NAME} </h2>
          <p>
            Hosted by <strong>{eventData.HOST_NAME}</strong>
          </p>

          <div>
            <div>📅</div>
            <div className="event-start">
              <strong>{eventData.EVENT_START}</strong>
            </div>
            <div className="event-end">
              to <strong>{eventData.EVENT_END}</strong> UTC +10
            </div>
          </div>

          <div>
            <div></div>
            <div className="event-end">
              <strong>{eventData.LOCATION_NAME}</strong>
            </div>
          </div>
        </div>

        <div className="eventpage-image-container">
          <img
            src={EventImage}
            alt="created_event_image"
            id="display_profile_image"
          />
        </div>
      </div>
    </div>
  );
};

export { EventPage };
