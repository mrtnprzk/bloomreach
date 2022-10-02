import React from "react";
import { useForm } from "../context/FormContext";
import EventStep from "./EventStep";

const FormSteps = () => {
  const { events, newFilter } = useForm();

  return (
    <div className="bg-white flex flex-col rounded shadow p-5">
      {events.map((event: any, index: number) => (
        <EventStep key={index} event={event} index={index} />
      ))}
      <button
        type="button"
        onClick={newFilter}
        className="text-cyan-500 text-center my-5 mx-auto"
      >
        + ADD FUNNEL STEP
      </button>
    </div>
  );
};

export default FormSteps;
