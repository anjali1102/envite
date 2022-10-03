import { createContext, useContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {

  const eventDetails = [
    {
      id: 1,
      EVENT_NAME: "",
      HOST_NAME: "",
      EVENT_START: "",
      EVENT_END: "",
      LOCATION_NAME: "",
      PROFILE_IMG: "",
    },
  ];

  const [eventData, setEventData] = useState(eventDetails);
  return (
    <EventContext.Provider value={{ eventData, setEventData }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  return useContext(EventContext);
};
