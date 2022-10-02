import React from "react";
import { useForm } from "../context/FormContext";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { FormEvent } from "../../types";

interface Props {
  event: FormEvent;
  index: number;
}

const EventStepHeader = ({ event, index }: Props) => {
  const { events, copyFilter, deleteFilter } = useForm();

  return (
    <div className="flex justify-between items-center text-sm font-medium text-gray-700 h-6">
      <h3>{`${index + 1}. Step: ${
        event.name ? event.name : "Unnamed Step"
      }`}</h3>
      <div className="hidden group-hover:block space-x-5 text-gray-500">
        {events.length > 1 && (
          <button type="button" onClick={() => deleteFilter(index)}>
            <DeleteForeverIcon />
          </button>
        )}
        <button onClick={() => copyFilter(index)} type="button">
          <ContentCopyIcon />
        </button>
      </div>
    </div>
  );
};

export default EventStepHeader;
