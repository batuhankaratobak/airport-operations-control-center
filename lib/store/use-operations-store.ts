"use client";

import { create } from "zustand";
import type { FlightStatus, FlightType } from "../types";

type FlightTypeFilter = FlightType | "all";
type FlightStatusFilter = FlightStatus | "all";

interface OperationsState {
  search: string;
  flightType: FlightTypeFilter;
  flightStatus: FlightStatusFilter;
  selectedTerminal: string;
  resolvedAlertIds: string[];
  setSearch: (search: string) => void;
  setFlightType: (flightType: FlightTypeFilter) => void;
  setFlightStatus: (flightStatus: FlightStatusFilter) => void;
  setSelectedTerminal: (terminal: string) => void;
  toggleAlert: (id: string) => void;
}

export const useOperationsStore = create<OperationsState>((set) => ({
  search: "",
  flightType: "all",
  flightStatus: "all",
  selectedTerminal: "all",
  resolvedAlertIds: [],
  setSearch: (search) => set({ search }),
  setFlightType: (flightType) => set({ flightType }),
  setFlightStatus: (flightStatus) => set({ flightStatus }),
  setSelectedTerminal: (selectedTerminal) => set({ selectedTerminal }),
  toggleAlert: (id) => set((state) => ({
    resolvedAlertIds: state.resolvedAlertIds.includes(id)
      ? state.resolvedAlertIds.filter((alertId) => alertId !== id)
      : [...state.resolvedAlertIds, id],
  })),
}));
