import React from "react";
import FormSteps from "./FormSteps";
import FormHeader from "./FormHeader";
import FormSubmitButton from "./FormSubmitButton";
import { useForm } from "../context/FormContext";

const Form = () => {
  const { applyFilters } = useForm();

  return (
    <form
      className="flex flex-col bg-slate-100 max-w-[100rem] rounded my-5 mx-auto p-5 space-y-5 shadow"
      onSubmit={(e) => applyFilters(e)}
    >
      <FormHeader />
      <FormSteps />
      <FormSubmitButton />
    </form>
  );
};

export default Form;
