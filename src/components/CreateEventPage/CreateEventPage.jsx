import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEvent } from "../../context/event/EventContext";
import "./CreateEventPage.css";

const CreateEventPage = () => {
  const { eventData, setEventData } = useEvent();
  const userInputHandler = (e) => {
    const { name, value, files } = e.target;

    setEventData({ ...eventData, [name]: value, files:files });
  };
  
  return (
    <div className="create-event-main">
      <form className="form-container">
        <h1 className="create-event-head">Create Your Event</h1>
        <label htmlFor="event-name"> 🎉Event Name:</label>
        <input
          id="event-name"
          className="form-field"
          type="text"
          placeholder="Event Name"
          name="EVENT_NAME"
          onChange={userInputHandler}
          value={eventData.EVENT_NAME}
          required
        />

        <label htmlFor="host-name">🔊 Enter Host Name:</label>
        <input
          id="host-name"
          className="form-field"
          type="text"
          placeholder="Host Name"
          name="HOST_NAME"
          onChange={userInputHandler}
          value={eventData.HOST_NAME}
          required
        />

        <label htmlFor="start"> 🗓️ Start date:</label>
        <input
          id="start"
          className="form-field"
          type="date"
          name="EVENT_START"
          min="2022-01-01"
          max="2022-12-31"
          onChange={userInputHandler}
          value={eventData.EVENT_START}
          required
        ></input>
        <label htmlFor="start">👋End date:</label>
        <input
          id="end"
          className="form-field"
          type="date"
          name="EVENT_END"
          min="2022-01-01"
          max="2022-12-31"
          onChange={userInputHandler}
          value={eventData.EVENT_END}
          required
        ></input>
        <label htmlFor="Location-name">📍Location Name:</label>
        <input
          id="Location-name"
          className="form-field"
          type="text"
          placeholder="Location Name"
          name="LOCATION_NAME"
          onChange={userInputHandler}
          value={eventData.LOCATION_NAME}
          required
        />
        <label htmlFor="PROFILE_IMG">🤳Choose a profile picture:</label>

        <input
          id="PROFILE_IMG"
          className="form-field"
          type="file"
          name="PROFILE_IMG"
          accept="image/png, image/jpeg"
          onChange={userInputHandler}
          value={eventData.PROFILE_IMG}
          required
        />

        <Link to="/event">
          <button className="form-field-btn" type="submit">
            Create Event
          </button>
        </Link>
      </form>
    </div>
  );
};

export { CreateEventPage };
