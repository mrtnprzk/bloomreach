import React from "react";
import Form from "./components/Form";
import { useEvents } from "./context/EventsContext";

function App() {
  const { isLoadingEvents } = useEvents();

  if (isLoadingEvents)
    return <h1 className="text-3xl text-center pt-32">Loading!</h1>;

  return <Form />;
}

export default App;
