import Link from "next/link";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import type { Flight } from "@/lib/types";
import { FlightStatusBadge } from "@/components/ui/flight-status-badge";

export function ActivityList({ flights }: { flights: Flight[] }) {
  return <section className="panel activity-panel"><div className="section-heading"><div><p>Updated moments ago</p><h2>Recent flight activity</h2></div><Link href="/flights">View all flights</Link></div><div className="activity-list">{flights.slice(0, 5).map((flight) => <Link href={`/flights/${flight.id}`} className="activity-row" key={flight.id}><span className={`movement-icon ${flight.type}`} >{flight.type === "arrival" ? <ArrowDownLeft size={17}/> : <ArrowUpRight size={17}/>}</span><div className="activity-flight"><strong>{flight.flightNumber}</strong><span>{flight.airline}</span></div><div className="activity-route"><strong>{flight.originCode} <i>→</i> {flight.destinationCode}</strong><span>{flight.scheduledTime} · Gate {flight.gate}</span></div><FlightStatusBadge status={flight.status}/></Link>)}</div></section>;
}
