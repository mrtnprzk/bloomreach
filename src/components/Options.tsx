import React from "react";
import { Listbox } from "@headlessui/react";

interface Props {
  optionsData: any;
}

const Options = ({ optionsData }: Props) => {
  return (
    <Listbox.Options className="absolute z-10 mt-1 w-auto bg-white shadow-lg max-h-32 rounded py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none ">
      {optionsData.map((data: any, index: number) => (
        <Listbox.Option
          key={index}
          className="hover:bg-yellow-400 text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
          value={data.property ? data.property : data.type}
        >
          <div className="flex items-center">
            <span className="font-semibold  ml-3 block truncate">
              {data.property ? data.property : data.type}
            </span>
          </div>
        </Listbox.Option>
      ))}
    </Listbox.Options>
  );
};

export default Options;
