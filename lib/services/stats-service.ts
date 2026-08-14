import { airportRepository } from "@/lib/repositories/airport-repository";
import type { AirportStats } from "@/lib/types";

export const statsService = {
  async get(): Promise<AirportStats> {
    const gates = airportRepository.findGates();
    const alerts = airportRepository.findAlerts();
    return {
      totalFlights: 184,
      departures: 92,
      arrivals: 92,
      delayedFlights: 7,
      activeGates: gates.filter((gate) => gate.status !== "maintenance").length,
      operationalAlerts: alerts.filter((alert) => !alert.resolved).length,
    };
  },
};
