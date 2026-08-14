export type FlightType = "arrival" | "departure";
export type FlightStatus = "on-time" | "boarding" | "delayed" | "landed" | "departed" | "cancelled";
export type GateStatus = "available" | "occupied" | "boarding" | "maintenance";
export type AlertSeverity = "low" | "medium" | "high";

export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  type: FlightType;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  scheduledTime: string;
  estimatedTime: string;
  gate: string;
  terminal: string;
  status: FlightStatus;
  aircraft: string;
}

export interface Gate {
  id: string;
  number: string;
  terminal: string;
  currentFlight?: string;
  nextFlight?: string;
  nextFlightTime?: string;
  status: GateStatus;
}

export interface Alert {
  id: string;
  severity: AlertSeverity;
  category: string;
  message: string;
  timestamp: string;
  resolved: boolean;
  location: string;
}

export interface AirportStats {
  totalFlights: number;
  departures: number;
  arrivals: number;
  delayedFlights: number;
  activeGates: number;
  operationalAlerts: number;
}
