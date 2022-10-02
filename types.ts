import React, { ReactNode } from "react";

export interface EventType {
  type: string;
  properties: EventProperty[];
}

export interface EventProperty {
  type: string;
  property: string;
}

export interface EventMethod {
  property: string;
  type: string;
}

export interface EventsContextTypes {
  eventsData: EventType[];
  isLoadingEvents: boolean;
  methods: EventMethod[]
}

export interface EventsContextProps {
  children: ReactNode;
}

export interface FormEvent {
  name: string | null;
  attribute: string | null;
  method: {
    name: string | null,
    value: number | string | undefined
  }
}

export interface FormContextTypes {
  events: FormEvent[];
  filterNameHandler: (value: string, index: number) => void;
  filterAttributeHandler: (value: string, index: number) => void;
  filterMethodHandler: (value: string, index: number, type: string) => void;
  newFilter: () => void;
  copyFilter: (index: number) => void;
  deleteFilter: (index: number) => void;
  discardFilters: () => void;
  applyFilters: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface FormContextProps {
  children: ReactNode;
}
