import { AlertTriangle, ArrowDownToLine, ArrowUpFromLine, DoorOpen, Plane } from "lucide-react";
import Link from "next/link";
import { StatCard } from "@/components/dashboard/stat-card";
import { AirportStatus } from "@/components/dashboard/airport-status";
import { ActivityList } from "@/components/dashboard/activity-list";
import { AlertCard } from "@/components/alerts/alert-card";
import { alertService } from "@/lib/services/alert-service";
import { flightService } from "@/lib/services/flight-service";
import { statsService } from "@/lib/services/stats-service";

// Opt out of the Full Route Cache so each request demonstrates SSR while the
// data-fetching components themselves remain server-only.
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [stats, flights, alerts] = await Promise.all([statsService.get(), flightService.getAll(), alertService.getAll()]);
  return <div className="dashboard-page"><div className="page-intro"><div><p>Thursday, 13 August 2026</p><h2>Good morning, Operations</h2><span>Here’s what’s happening across the airport right now.</span></div><div className="time-block"><small>Local time · UTC+3</small><strong>09:02</strong></div></div><section className="stats-grid"><StatCard label="Total flights" value={stats.totalFlights} note="4 more than yesterday" trend="up" icon={Plane}/><StatCard label="Departures" value={stats.departures} note="38 completed" icon={ArrowUpFromLine} tone="teal"/><StatCard label="Arrivals" value={stats.arrivals} note="35 landed" icon={ArrowDownToLine} tone="blue"/><StatCard label="Delayed" value={stats.delayedFlights} note="3.8% of schedule" trend="down" icon={AlertTriangle} tone="amber"/><StatCard label="Active gates" value={stats.activeGates} note="1 in maintenance" icon={DoorOpen} tone="teal"/></section><div className="dashboard-columns"><div><ActivityList flights={flights}/></div><div className="dashboard-side"><AirportStatus/><section className="panel compact-alerts"><div className="section-heading"><div><p>Requires attention</p><h2>Operational alerts</h2></div><Link href="/alerts">View all</Link></div>{alerts.filter((alert) => !alert.resolved).slice(0, 2).map((alert) => <AlertCard alert={alert} key={alert.id}/>)}</section></div></div></div>;
}
