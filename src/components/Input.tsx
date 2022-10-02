import React from "react";
import { Listbox } from "@headlessui/react";

interface Props {
  selectedOption: any;
  selectAn: string;
}

const Input = ({ selectedOption, selectAn }: Props) => {
  return (
    <Listbox.Button className="relative w-auto bg-white border border-gray-300 rounded shadow-sm py-2 pr-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 ">
      <span className="flex items-center">
        <span className="ml-3 block truncate">
          {selectedOption || `Select ${selectAn}`}
        </span>
      </span>
    </Listbox.Button>
  );
};

export default Input;
