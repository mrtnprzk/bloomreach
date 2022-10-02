import React from "react";
import { useForm } from "../context/FormContext";

const FormHeader = () => {
  const { discardFilters } = useForm();

  return (
    <div className="flex justify-between">
      <h2>CUSTOMER FILTER</h2>
      <button
        type="button"
        onClick={discardFilters}
        className="font-bold text-red-500"
      >
        Discard filters
      </button>
    </div>
  );
};

export default FormHeader;
