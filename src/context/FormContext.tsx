import React, { createContext, useContext, useState } from "react";
import { FormContextTypes, FormContextProps, FormEvent } from "../../types";
import { event } from "../data";

const FormContext = createContext({} as FormContextTypes);

export const useForm = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }: FormContextProps) => {
  const [events, setEvents] = useState<FormEvent[]>([event]);

  //Functions
  const filterNameHandler = (value: string, index: number) => {
    setEvents(
      (currEvents) =>
        currEvents.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              name: value,
              attribute: null,
              method: {
                name: null,
                value: undefined,
              },
            };
          } else {
            return item;
          }
        }) as FormEvent[]
    );
  };

  const filterAttributeHandler = (value: string, index: number) => {
    setEvents(
      (currEvents) =>
        currEvents.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              attribute: value,
              method: {
                name: null,
                value: undefined,
              },
            };
          } else {
            return item;
          }
        }) as FormEvent[]
    );
  };

  const filterMethodHandler = (value: string, index: number, type: string) => {
    setEvents(
      (currEvents) =>
        currEvents.map((item, i) => {
          if (i === index) {
            if (type === "method-name") {
              return {
                ...item,
                method: {
                  ...item.method,
                  name: value,
                },
              };
            } else if (type === "method-value") {
              return {
                ...item,
                method: {
                  ...item.method,
                  value: value,
                },
              };
            }
          } else {
            return item;
          }
        }) as FormEvent[]
    );
  };

  const newFilter = () => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  const copyFilter = (index: number) => {
    console.log(index);
  };

  const deleteFilter = (index: number) => {
    setEvents((current) =>
      current.filter((e, i) => {
        return i !== index;
      })
    );
  };

  const discardFilters = () => {
    setEvents([event]);
  };

  const applyFilters = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(events);
  };

  return (
    <FormContext.Provider
      value={{
        events,
        filterNameHandler,
        filterAttributeHandler,
        filterMethodHandler,
        newFilter,
        copyFilter,
        deleteFilter,
        discardFilters,
        applyFilters,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
