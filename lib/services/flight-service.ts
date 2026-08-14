import { airportRepository } from "@/lib/repositories/airport-repository";
import type { Flight } from "@/lib/types";

const simulateLatency = () => new Promise((resolve) => setTimeout(resolve, 80));

export const flightService = {
  async getAll(): Promise<Flight[]> {
    await simulateLatency();
    return airportRepository.findFlights();
  },
  async getById(id: string): Promise<Flight | null> {
    await simulateLatency();
    return airportRepository.findFlightById(id);
  },
};
