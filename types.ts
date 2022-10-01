import { ReactNode } from "react";

export interface EventType {
  type: string;
  properties: EventProperty[];
}

export interface EventProperty {
  type: string;
  property: string;
}

export interface EventsContextTypes {
  eventsData: EventType[];
  isLoadingEvents: boolean;
}

export interface EventsContextProps {
  children: ReactNode;
}
