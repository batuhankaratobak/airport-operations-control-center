import type { Metadata } from "next";
import { FlightTable } from "@/components/flights/flight-table";
import { flightService } from "@/lib/services/flight-service";

export const metadata: Metadata = { title: "Flights" };

export default async function FlightsPage() {
  const flights = await flightService.getAll();
  return <div><div className="content-heading"><div><h2>Today’s flight schedule</h2><p>Monitor all arrivals and departures from one view.</p></div><span className="live-chip"><i/>Live data</span></div><section className="panel table-panel"><FlightTable flights={flights}/></section></div>;
}
