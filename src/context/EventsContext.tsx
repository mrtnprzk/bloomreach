import { createContext, useContext, useState, useEffect } from "react";
import { EventsContextTypes, EventsContextProps } from "../../types";
import axios from "axios";

const EventsContext = createContext({} as EventsContextTypes);

export const useEvents = () => {
  return useContext(EventsContext);
};

export const EventsProvider = ({ children }: EventsContextProps) => {
  const [eventsData, setEventsData] = useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);
  console.log(eventsData);

  const methods = [
    { property: "equals", type: "string" },
    { property: "does not equal", type: "string" },
    { property: "contains", type: "string" },
    { property: "does not contain", type: "string" },
    { property: "equal to", type: "number" },
    { property: "in between", type: "number" },
    { property: "less than", type: "number" },
    { property: "greater than", type: "number" },
  ];

  const getEvents = async () => {
    setIsLoadingEvents(true);
    try {
      const response = await axios.get("https://customer-events.herokuapp.com");
      setEventsData(response.data.data.events);
      setIsLoadingEvents(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <EventsContext.Provider value={{ eventsData, isLoadingEvents, methods }}>
      {children}
    </EventsContext.Provider>
  );
};
