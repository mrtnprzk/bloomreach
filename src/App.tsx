import React from "react";
import { useEvents } from "./context/EventsContext";

function App() {
  
  const {eventsData, isLoadingEvents} = useEvents()

  if (isLoadingEvents) return <h1 className="text-3xl font-bold underline">Loading!</h1>

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {
          eventsData.map((event: any, i: any) => (
            <p key={i}>{event.type}</p>
          ))
        }
      </h1>
    </div>
  );
}

export default App;
