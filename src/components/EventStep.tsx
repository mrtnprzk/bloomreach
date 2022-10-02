import React from "react";
import { FormEvent } from "../../types";
import Event from "./Event";
import Attribute from "./Attribute";
import EventStepHeader from "./EventStepHeader";
import Method from "./Method";

interface Props {
  event: FormEvent;
  index: number;
}

const EventStep = ({ event, index }: Props) => {
  return (
    <div className="py-5 group border-b-2">
      <EventStepHeader event={event} index={index} />
      <div className="mt-1 relative flex space-x-5">
        <Event event={event} index={index} />
        {event.name && <Attribute event={event} index={index} />}
        {event.attribute && <Method event={event} index={index} />}
      </div>
    </div>
  );
};

export default EventStep;
