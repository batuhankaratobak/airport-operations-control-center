import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3, DoorOpen, MapPin, Plane, RadioTower } from "lucide-react";
import { FlightStatusBadge } from "@/components/ui/flight-status-badge";
import { flightService } from "@/lib/services/flight-service";

interface PageProps { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  const flights = await flightService.getAll();
  return flights.map((flight) => ({ id: flight.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const flight = await flightService.getById((await params).id);
  return { title: flight ? `${flight.flightNumber} Flight Detail` : "Flight not found" };
}

export default async function FlightDetailPage({ params }: PageProps) {
  const flight = await flightService.getById((await params).id);
  if (!flight) notFound();
  const timeline = flight.type === "departure" ? [{ time: "07:35", label: "Check-in opened", done: true }, { time: "08:05", label: "Gate assigned", done: true }, { time: "08:15", label: "Boarding started", done: flight.status === "boarding" }, { time: flight.estimatedTime, label: "Estimated departure", done: flight.status === "departed" }] : [{ time: "07:42", label: "Departed origin", done: true }, { time: "08:18", label: "Gate assigned", done: true }, { time: flight.estimatedTime, label: "Estimated arrival", done: flight.status === "landed" }, { time: "—", label: "Baggage delivery", done: false }];
  return <div className="detail-page"><Link className="back-link" href="/flights"><ArrowLeft size={16}/>Back to flights</Link><section className="flight-hero panel"><div className="flight-identity"><span className="airline-mark"><Plane size={24}/></span><div><p>{flight.airline}</p><h2>{flight.flightNumber}</h2><span>{flight.aircraft}</span></div></div><FlightStatusBadge status={flight.status}/><div className="route-visual"><div><strong>{flight.originCode}</strong><span>{flight.origin}</span></div><div className="route-line"><i/><Plane size={20}/><i/></div><div><strong>{flight.destinationCode}</strong><span>{flight.destination}</span></div></div><div className="flight-facts"><div><span><Clock3 size={15}/>Scheduled</span><strong>{flight.scheduledTime}</strong></div><div><span><Clock3 size={15}/>Estimated</span><strong>{flight.estimatedTime}</strong></div><div><span><DoorOpen size={15}/>Gate</span><strong>{flight.gate}</strong></div><div><span><MapPin size={15}/>Terminal</span><strong>{flight.terminal}</strong></div></div></section><div className="detail-grid"><section className="panel timeline-panel"><div className="section-heading"><div><p>Live progression</p><h2>Operational timeline</h2></div><RadioTower size={20}/></div><div className="timeline">{timeline.map((item, index) => <div className={`timeline-item ${item.done ? "done" : ""}`} key={item.label}><span className="timeline-node">{item.done ? "✓" : index + 1}</span><div><small>{item.time}</small><strong>{item.label}</strong></div>{index < timeline.length - 1 && <i/>}</div>)}</div></section><section className="panel ops-notes"><div className="section-heading"><div><p>Ground operations</p><h2>Handling summary</h2></div></div><dl><div><dt>Aircraft</dt><dd>{flight.aircraft}</dd></div><div><dt>Stand</dt><dd>{flight.gate} contact gate</dd></div><div><dt>Turnaround</dt><dd>On schedule</dd></div><div><dt>Last update</dt><dd>2 min ago</dd></div></dl><Link href="/gates">View gate operations <ArrowRight size={15}/></Link></section></div></div>;
}
