import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EventsProvider } from "./context/EventsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <EventsProvider>
      <App />
    </EventsProvider> 
  </React.StrictMode>
);
