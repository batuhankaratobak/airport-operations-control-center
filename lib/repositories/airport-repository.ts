import { alerts, flights, gates } from "@/lib/mock-data";
import type { Alert, Flight, Gate } from "@/lib/types";

// This is the only module coupled to the local dataset. A real implementation
// can replace these methods with database or upstream API calls.
export const airportRepository = {
  findFlights(): Flight[] {
    return flights;
  },
  findFlightById(id: string): Flight | null {
    return flights.find((flight) => flight.id === id) ?? null;
  },
  findGates(): Gate[] {
    return gates;
  },
  findAlerts(): Alert[] {
    return alerts;
  },
};
