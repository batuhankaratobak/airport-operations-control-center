import { airportRepository } from "@/lib/repositories/airport-repository";
import type { Gate } from "@/lib/types";

export const gateService = {
  async getAll(): Promise<Gate[]> {
    return airportRepository.findGates();
  },
};
