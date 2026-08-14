"use client";

import Link from "next/link";
import { ArrowDownLeft, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import type { Flight, FlightStatus, FlightType } from "@/lib/types";
import { useOperationsStore } from "@/lib/store/use-operations-store";
import { FlightStatusBadge } from "@/components/ui/flight-status-badge";
import { SearchInput } from "@/components/ui/search-input";
import { FilterSelect } from "@/components/ui/filter-select";
import { EmptyState } from "@/components/ui/empty-state";

const typeOptions = [{ value: "all", label: "All movements" }, { value: "departure", label: "Departures" }, { value: "arrival", label: "Arrivals" }];
const statusOptions = [{ value: "all", label: "All statuses" }, { value: "on-time", label: "On time" }, { value: "boarding", label: "Boarding" }, { value: "delayed", label: "Delayed" }, { value: "landed", label: "Landed" }];

export function FlightTable({ flights }: { flights: Flight[] }) {
  const search = useOperationsStore((state) => state.search);
  const flightType = useOperationsStore((state) => state.flightType);
  const flightStatus = useOperationsStore((state) => state.flightStatus);
  const setSearch = useOperationsStore((state) => state.setSearch);
  const setFlightType = useOperationsStore((state) => state.setFlightType);
  const setFlightStatus = useOperationsStore((state) => state.setFlightStatus);
  const query = search.toLowerCase().trim();
  const filtered = flights.filter((flight) => (!query || [flight.flightNumber, flight.airline, flight.origin, flight.destination, flight.originCode, flight.destinationCode].some((field) => field.toLowerCase().includes(query))) && (flightType === "all" || flight.type === flightType) && (flightStatus === "all" || flight.status === flightStatus));
  return <>
    <div className="toolbar"><SearchInput value={search} onChange={setSearch} placeholder="Search flight, airport or airline"/><div className="filter-group"><SlidersHorizontal size={17}/><FilterSelect label="Movement type" value={flightType} onChange={(value) => setFlightType(value as FlightType | "all")} options={typeOptions}/><FilterSelect label="Flight status" value={flightStatus} onChange={(value) => setFlightStatus(value as FlightStatus | "all")} options={statusOptions}/></div></div>
    <div className="results-meta"><span>{filtered.length} flights</span><p>Times shown in local time (UTC+3)</p></div>
    {filtered.length ? <><div className="table-wrap"><table className="flight-table"><thead><tr><th>Flight</th><th>Movement</th><th>Route</th><th>Scheduled</th><th>Gate</th><th>Terminal</th><th>Status</th></tr></thead><tbody>{filtered.map((flight) => <tr key={flight.id}><td><Link href={`/flights/${flight.id}`}><strong>{flight.flightNumber}</strong><span>{flight.airline}</span></Link></td><td><span className={`movement-label ${flight.type}`}>{flight.type === "arrival" ? <ArrowDownLeft size={14}/> : <ArrowUpRight size={14}/>} {flight.type}</span></td><td><strong>{flight.originCode} <i>→</i> {flight.destinationCode}</strong><span>{flight.origin} to {flight.destination}</span></td><td><strong>{flight.scheduledTime}</strong>{flight.scheduledTime !== flight.estimatedTime && <span>Est. {flight.estimatedTime}</span>}</td><td><strong>{flight.gate}</strong></td><td>{flight.terminal}</td><td><FlightStatusBadge status={flight.status}/></td></tr>)}</tbody></table></div>
    <div className="flight-cards">{filtered.map((flight) => <Link className="flight-card" href={`/flights/${flight.id}`} key={flight.id}><div className="flight-card-head"><div><strong>{flight.flightNumber}</strong><span>{flight.airline}</span></div><FlightStatusBadge status={flight.status}/></div><div className="card-route"><div><strong>{flight.originCode}</strong><span>{flight.origin}</span></div><i>→</i><div><strong>{flight.destinationCode}</strong><span>{flight.destination}</span></div></div><div className="flight-card-meta"><span><small>Scheduled</small>{flight.scheduledTime}</span><span><small>Gate</small>{flight.gate}</span><span><small>Terminal</small>{flight.terminal}</span></div></Link>)}</div></> : <EmptyState/>}
  </>;
}
