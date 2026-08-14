import type { Metadata } from "next";
import { BookOpen, Clock3, Info, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Airport Guide", description: "Static operational reference for Antalya International Airport." };
export const dynamic = "force-static";

const sections = [
  { icon: MapPin, title: "Terminal operations", text: "Terminal 1 primarily handles international arrivals. Terminal 2 supports the main international departure bank and contact-gate operations." },
  { icon: Clock3, title: "Operating hours", text: "Airfield and terminal operations run continuously. Peak traffic windows are typically 07:00–11:30 and 18:00–23:00 local time." },
  { icon: ShieldCheck, title: "Airside procedures", text: "All personnel entering restricted areas must display a valid airside pass and follow current stand, vehicle lane, and runway-crossing procedures." },
  { icon: Info, title: "Operational contacts", text: "Use the airport operations frequency for time-critical coordination. Non-urgent gate and turnaround updates should follow the standard operations desk workflow." },
];

export default function AirportGuidePage() {
  return <div><div className="content-heading"><div><h2>Airport operations guide</h2><p>Static reference information for daily operating procedures.</p></div><span className="guide-version"><BookOpen size={15}/>Guide · v2.4</span></div><section className="guide-grid">{sections.map(({ icon: Icon, title, text }) => <article className="panel guide-card" key={title}><span><Icon size={20}/></span><h3>{title}</h3><p>{text}</p></article>)}</section><section className="panel guide-note"><strong>Operational reference</strong><p>This page is statically generated at build time because its content changes infrequently and does not depend on live operational data.</p></section></div>;
}
