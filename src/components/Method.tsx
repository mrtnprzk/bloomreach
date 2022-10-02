import React from "react";
import { useForm } from "../context/FormContext";
import { useEvents } from "../context/EventsContext";
import { Listbox } from "@headlessui/react";
import { FormEvent } from "../../types";
import Input from "./Input";
import Options from "./Options";

interface Props {
  event: FormEvent;
  index: number;
}

const Method = ({ event, index }: Props) => {
  const { filterMethodHandler } = useForm();
  const { methods } = useEvents();
  const type = "a method";

  return (
    <div className="relative space-x-3">
      <Listbox onChange={(e) => filterMethodHandler(e, index, "method-name")}>
        <Input selectedOption={event?.method?.name} selectAn={type} />
        <Options optionsData={methods} />
      </Listbox>
      <input
        onChange={(e) =>
          filterMethodHandler(e.target.value, index, "method-value")
        }
        className="border rounded p-2"
        type="text"
      />
    </div>
  );
};

export default Method;
