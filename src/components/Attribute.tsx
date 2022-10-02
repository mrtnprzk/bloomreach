import React from "react";
import { useForm } from "../context/FormContext";
import { useEvents } from "../context/EventsContext";
import { Listbox } from "@headlessui/react";
import { FormEvent, EventType } from "../../types";
import Input from "./Input";
import Options from "./Options";

interface Props {
  event: FormEvent;
  index: number;
}

const Attribute = ({ event, index }: Props) => {
  const { eventsData } = useEvents();
  const { filterAttributeHandler } = useForm();
  const type = "an attribute";
  const eventIndex = eventsData.findIndex(
    (element: EventType) => element.type === event.name
  );

  return (
    <div className="relative">
      <Listbox onChange={(e) => filterAttributeHandler(e, index)}>
        <Input selectedOption={event?.attribute} selectAn={type} />
        <Options optionsData={eventsData[eventIndex].properties} />
      </Listbox>
    </div>
  );
};

export default Attribute;
