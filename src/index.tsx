import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EventsProvider } from "./context/EventsContext";
import { FormProvider } from "./context/FormContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <EventsProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </EventsProvider>
  </React.StrictMode>
);
