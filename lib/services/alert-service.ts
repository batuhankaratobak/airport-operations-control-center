import { airportRepository } from "@/lib/repositories/airport-repository";
import type { Alert } from "@/lib/types";

export const alertService = {
  async getAll(): Promise<Alert[]> {
    return airportRepository.findAlerts();
  },
};
