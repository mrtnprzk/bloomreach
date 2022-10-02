import React from "react";
import { Listbox } from "@headlessui/react";
import { FormEvent } from "../../types";
import Input from "./Input";
import Options from "./Options";
import { useForm } from "../context/FormContext";
import { useEvents } from "../context/EventsContext";

interface Props {
  event: FormEvent;
  index: number;
}

const Event = ({ event, index }: Props) => {
  const { eventsData } = useEvents();
  const { filterNameHandler } = useForm();
  const type = "an event";
  
  return (
    <div className="relative">
      <Listbox onChange={(e) => filterNameHandler(e, index)}>
        <Input selectedOption={event?.name} selectAn={type} />
        <Options optionsData={eventsData} />
      </Listbox>
    </div>
  );
};

export default Event;
